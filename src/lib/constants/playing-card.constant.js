import { deepFreeze } from '@/lib/lodash-like-or-something/deep-freeze';

const PLAYING_CARD_RANK = Object.freeze({
  TWO: '2',
  THREE: '3',
  FOUR: '4',
  FIVE: '5',
  SIX: '6',
  SEVEN: '7',
  EIGHT: '8',
  NINE: '9',
  TEN: '10',
  JACK: 'J',
  QUEEN: 'Q',
  KING: 'K',
  ACE: 'A',
});

const PLAYING_CARD_SUIT = Object.freeze({
  SPADE: '♠',
  CLUB: '♣',
  HEART: '♥',
  DIAMOND: '♦',
});

const PLAYING_CARD = deepFreeze({
  ranks: Object.values(PLAYING_CARD_RANK),
  suits: Object.values(PLAYING_CARD_SUIT),
});

export { PLAYING_CARD, PLAYING_CARD_RANK, PLAYING_CARD_SUIT };
