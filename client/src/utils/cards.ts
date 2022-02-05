import { DeckOfCards } from '../components/Deck';

export const shuffleDeck = (deck: DeckOfCards['deck']) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * deck.length);
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
};
