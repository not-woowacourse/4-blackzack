class Card {
  #rank;
  #suit;

  constructor(rank, suit) {
    this.#rank = rank;
    this.#suit = suit;
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
        throw new Error('지원하지 않는 문장입니다.');
    }
  }

  toKoreanString() {
    const suitKoreanString = this.#convertSuitToKoreanString(this.#suit);
    return `${this.rank}${suitKoreanString}`;
  }

  get suit() {
    return this.#suit;
  }

  get value() {
    switch (this.#rank) {
      case 'A':
        return 11;
      case 'J':
      case 'Q':
      case 'K':
        return 10;
      default:
        return this.#rank;
    }
  }
}

export { Card };
