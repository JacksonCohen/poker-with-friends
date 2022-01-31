import { createContext } from 'react';

export interface GameContextProps {
  isInRoom: boolean;
  setIsInRoom: (isInRoom: boolean) => void;
  isPlayerTurn: boolean;
  setIsPlayerTurn: (turn: boolean) => void;
}

const defaultState: GameContextProps = {
  isInRoom: false,
  setIsInRoom: () => {},
  isPlayerTurn: false,
  setIsPlayerTurn: () => {},
};

export default createContext(defaultState);
