import { BLACKJACK_RULE } from '@/lib/constants/blackjack-rule.constant';
import { PLAYING_CARD_RANK } from '@/lib/constants/playing-card.constant';

import { convertSuitToKoreanString } from './korean-playing-card-suit.constant';

class Card {
  /**
   * rank와 suit로 네이밍한 이유에 대한 설명
   * @See {@link https://www.cs.umd.edu/class/spring2020/cmsc132-030X-040X-050X/132Spring20Proj1/playingCard.html}
   */
  #rank;
  #suit;

  constructor(rank, suit) {
    this.#rank = rank;
    this.#suit = suit;
  }

  get rank() {
    return this.#rank;
  }

  toKoreanString() {
    const suitKoreanString = convertSuitToKoreanString(this.#suit);
    return `${this.#rank}${suitKoreanString}`;
  }

  isAce() {
    return this.#rank === PLAYING_CARD_RANK.ACE;
  }

  get suit() {
    return this.#suit;
  }

  get value() {
    switch (this.#rank) {
      case PLAYING_CARD_RANK.ACE:
        return BLACKJACK_RULE.ACE_VALUE;
      case PLAYING_CARD_RANK.KING:
      case PLAYING_CARD_RANK.QUEEN:
      case PLAYING_CARD_RANK.JACK:
        return BLACKJACK_RULE.FACE_CARD_VALUE;
      case PLAYING_CARD_RANK.TWO:
      case PLAYING_CARD_RANK.THREE:
      case PLAYING_CARD_RANK.FOUR:
      case PLAYING_CARD_RANK.FIVE:
      case PLAYING_CARD_RANK.SIX:
      case PLAYING_CARD_RANK.SEVEN:
      case PLAYING_CARD_RANK.EIGHT:
      case PLAYING_CARD_RANK.NINE:
      case PLAYING_CARD_RANK.TEN:
        return BLACKJACK_RULE.NUMBER_CARD_VALUE(this.#rank);
      default:
        throw new Error('지원하지 않는 카드 랭크입니다.');
    }
  }
}

export { Card };
