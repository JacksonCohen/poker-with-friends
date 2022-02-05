export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
export type Suit = 'hearts' | 'spades' | 'clubs' | 'diamonds';

export const valueMap = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

const unicodeSymbols = {
  hearts: '\u2665',
  spades: '\u2660',
  clubs: '\u2663',
  diamonds: '\u2666',
};

export class Card {
  public rank: Rank;
  public suit: Suit;
  public value: number;
  public unicode: string;

  constructor(rank: Rank, suit: Suit) {
    this.rank = rank;
    this.suit = suit;
    this.value = valueMap[rank];
    this.unicode = `${unicodeSymbols[this.suit]}${rank}`;
  }

  compare(otherCard: Card) {
    if (this.value == otherCard.value) {
      return 0;
    }
    if (this.value > otherCard.value) {
      return 1;
    }
    if (this.value < otherCard.value) {
      return -1;
    }
  }

  isSameCard(otherCard: Card) {
    if (this.value === otherCard.value && this.suit === otherCard.suit) {
      return true;
    }
    return false;
  }
}
