import { BLACKJACK_RULE } from '@/lib/constants/blackjack-rule.constant';

class Card {
  /**
   * rank와 suit로 네이밍한 이유에 대한 설명
   * @See {@link https://www.cs.umd.edu/class/spring2020/cmsc132-030X-040X-050X/132Spring20Proj1/playingCard.html}
   */
  #rank;
  #suit;

  constructor(rank, suit) {
    this.#rank = rank; // '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    this.#suit = suit; // '♠', '♣', '♥', '♦'
  }

  get rank() {
    return this.#rank;
  }

  #convertSuitToKoreanString(suit) {
    switch (suit) {
      case '♠':
        return '스페이드';
      case '♣':
        return '클로버';
      case '♥':
        return '하트';
      case '♦':
        return '다이아몬드';
      default:
        throw new Error('지원하지 않는 문양입니다.');
    }
  }

  toKoreanString() {
    const suitKoreanString = this.#convertSuitToKoreanString(this.#suit);
    return `${this.#rank}${suitKoreanString}`;
  }

  get suit() {
    return this.#suit;
  }

  get value() {
    switch (this.#rank) {
      case 'A':
        return BLACKJACK_RULE.ACE_VALUE;
      case 'J':
      case 'Q':
      case 'K':
        return BLACKJACK_RULE.FACE_CARD_VALUE;
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '10':
        return BLACKJACK_RULE.NUMBER_CARD_VALUE(this.#rank);
      default:
        throw new Error('지원하지 않는 카드 랭크입니다.');
    }
  }
}

export { Card };
