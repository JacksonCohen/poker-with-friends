import { useEffect, useState } from 'react';
import Game from './components/Game';
import JoinRoom from './components/JoinRoom';
import GameContext, { GameContextProps } from './contexts/gameContext';
import socketService from './services/socketService';

function App() {
  const [isInRoom, setIsInRoom] = useState(false);
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);

  const gameContextValue: GameContextProps = {
    isInRoom,
    setIsInRoom,
    isPlayerTurn,
    setIsPlayerTurn,
  };

  const connectToSocket = async () => {
    await socketService
      .connect('http://localhost:9000')
      .catch((error) => console.log('Error connecting to socket service: ', error));
  };

  useEffect(() => {
    connectToSocket();
  }, []);

  return (
    <GameContext.Provider value={gameContextValue}>
      <div className='w-full h-screen flex flex-col items-center p-4 bg-[#001219]'>
        <h1 className='m-0 text-red-400'>Welcome to Poker With Friends</h1>
        <div className='w-full h-full flex items-center justify-center'>
          {!isInRoom && <JoinRoom />}
          {isInRoom && <Game />}
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
