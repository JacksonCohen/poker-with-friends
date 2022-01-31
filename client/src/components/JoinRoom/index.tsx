import { ChangeEvent, useState } from 'react';

function JoinRoom() {
  const [roomName, setRoomName] = useState('');

  const handleRoomNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomName(event?.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className='w-full h-full flex flex-col items-center justify-center mt-8'>
      <h3 className='text-white'>Enter room ID to join a table</h3>
      <form action='submit'>
        <input
          type='text'
          className='w-80 h-8 bg-white outline-none border-2 border-solid border-red-200 rounded py-0 px-3'
          placeholder='Room ID'
          onChange={handleRoomNameChange}
        />
        <button className='outline-none bg-red-300 text-white text-lg border-2 border-solid border-transparent rounded mt-4 cursor-pointer hover:bg-transparent hover:border-green-200'>
          Join
        </button>
      </form>
    </div>
  );
}

export default JoinRoom;
