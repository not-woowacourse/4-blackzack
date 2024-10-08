class Card {
  #rank;
  #suit;

  constructor(rank, suit) {
    this.#rank = rank;
    this.#suit = suit;
  }

  get TransfertoScore() {
    if (this.#rank === 'A') {
      return 11;
    } else if (this.#rank === 'K' || this.#rank === 'Q' || this.#rank === 'J') {
      return 10;
    } else {
      return Number(this.#rank);
    }
  }

  toKoreanString() {
    let korsuit = '';

    switch (this.#suit) {
      case '♠':
        korsuit = '스페이드';
        break;
      case '♥':
        korsuit = '하트';
        break;
      case '♦':
        korsuit = '다이아몬드';
        break;
      case '♣':
        korsuit = '클로버';
        break;
    }

    return `${this.#rank}${korsuit}`;
  }
}

export { Card };
