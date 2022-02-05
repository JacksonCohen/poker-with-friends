import { Card, Suit, Rank } from '../Card';
import { shuffleDeck } from '../../utils/cards';

// constants to build the deck
const validSuits: Suit[] = ['hearts', 'spades', 'diamonds', 'clubs'];
const validRanks: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// types to build deck
export type totalNumCards = 52;

export class DeckOfCards {
  public deck: Card[] = [];
  public cardsDrawn: Card[] = [];

  constructor() {
    this.buildDeck();
  }

  buildDeck() {
    this.deck = []; // reset deck
    this.cardsDrawn = []; // reset cards drawn

    validSuits.forEach((suite) => {
      // build deck cycle
      validRanks.forEach((rank) => {
        this.deck.push(new Card(rank, suite));
      });
    });
  }

  dealCard() {
    if (!this.isEmpty()) {
      const cardFromTop = this.deck.pop()!;
      this.cardsDrawn.push(cardFromTop);
      return cardFromTop;
    }
    return null;
  }

  shuffleDeck(times = 1) {
    for (let i = 1; i <= times; i += 1) {
      shuffleDeck(this.deck);
    }
  }

  isEmpty() {
    return this.deck.length === 0;
  }
}
