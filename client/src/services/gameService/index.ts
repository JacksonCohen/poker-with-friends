import { Socket } from 'socket.io-client';

class GameService {
  public async joinGameRoom(socket: Socket, roomId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      socket.emit('join_game', { roomId });
      socket.on('room_joined', () => resolve(true));
      socket.on('room_joined_error', ({ error }) => reject(error));
    });
  }

  public async onStartGame(socket: Socket, listener: () => void) {
    socket.on('start_game', listener);
  }
}

export default new GameService();
