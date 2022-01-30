import {
  ConnectedSocket,
  MessageBody,
  OnMessage,
  SocketController,
  SocketIO,
} from 'socket-controllers';
import { Server, Socket } from 'socket.io';

@SocketController()
export class RoomController {
  @OnMessage('join_game')
  public async joinGame(
    @SocketIO() io: Server,
    @ConnectedSocket() socket: Socket,
    @MessageBody() input: any
  ) {
    console.log('New user joining room: ', input);

    const connectedSockets = io.sockets.adapter.rooms.get(input.roomId);
    const socketRooms = Array.from(socket.rooms.values()).filter((room) => room !== socket.id);

    if (socketRooms.length > 0 || (connectedSockets && connectedSockets.size === 10)) {
      socket.emit('room_join_error', {
        error: 'This table is full. Please join or start another.',
      });
    } else {
      await socket.join(input.roomId);
      socket.emit('room_joined');
    }
  }
}
