import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import gameContext from '../../contexts/gameContext';
import gameService from '../../services/gameService';
import socketService from '../../services/socketService';

function JoinRoom() {
  const [roomName, setRoomName] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const { setIsInRoom } = useContext(gameContext);

  const handleRoomNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomName(event?.target.value);
  };

  const joinRoom = async (event: FormEvent) => {
    event.preventDefault();

    const socket = socketService.socket;
    if (!socket || !roomName || roomName.trim() === '') return;
    setIsJoining(true);

    const joined = await gameService.joinGameRoom(socket, roomName).catch((error) => {
      alert(error);
    });

    if (joined) setIsInRoom(true);
    setIsJoining(false);
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center mt-8'>
      <h3 className='text-white mb-2'>Enter room ID to join a table</h3>
      <form action='submit' onSubmit={joinRoom} className='flex flex-col items-center'>
        <input
          type='text'
          className='w-80 h-8 bg-white outline-none border-2 border-solid border-red-200 rounded py-0 px-3 mb-4'
          placeholder='Room ID'
          value={roomName}
          onChange={handleRoomNameChange}
        />
        <button
          type='submit'
          className='w-24 outline-none bg-red-300 text-white text-lg border-2 border-solid border-transparent rounded cursor-pointer hover:bg-transparent hover:border-green-200'
          disabled={isJoining}
        >
          {isJoining ? 'Joining...' : 'Join'}
        </button>
      </form>
    </div>
  );
}

export default JoinRoom;
