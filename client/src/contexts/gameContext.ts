import { createContext } from 'react';

export interface GameContextProps {
  isInRoom: boolean;
  setIsInRoom: (isInRoom: boolean) => void;
}

const defaultState: GameContextProps = {
  isInRoom: false,
  setIsInRoom: () => {},
};

export default createContext(defaultState);
