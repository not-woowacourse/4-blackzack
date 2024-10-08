import { deepFreeze } from '@/lib/lodash-like-or-something/deep-freeze';

const PLAYING_CARD = deepFreeze({
  RANK: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  SUIT: ['♠', '♣', '♥', '♦'],
});

export { PLAYING_CARD };
