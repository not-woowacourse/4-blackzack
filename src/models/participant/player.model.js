import { Cards } from '@/models/card/cards.model';

class Player {
  #cards;
  #winCount;
  #drawCount;
  #loseCount;

  constructor() {
    this.#cards = new Cards();
  }

  addCard(card) {
    this.#cards.add(card);
  }

  addCards(cards) {
    cards.forEach((card) => this.addCard(card));
  }

  checkIsBust() {
    return this.#cards.checkIsBust();
  }

  checkCanDraw() {
    return !this.#cards.checkIsBust();
  }

  resetCards() {
    this.#cards.reset();
  }

  get cards() {
    return this.#cards.cards;
  }

  get score() {
    return this.#cards.score;
  }

  #increaswWinCount() {
    this.#winCount++;
  }

  #increaseDrawCount() {
    this.#drawCount++;
  }

  #increaseLoseCount() {
    this.#loseCount++;
  }

  updateResult(result) {
    switch (result) {
      case 'win':
        this.#increaswWinCount();
        break; //게임 전체 종료
      case 'draw':
        this.#increaseDrawCount();
        break;
      case 'lose':
        this.#increaseLoseCount();
        break;
      default:
        throw new Error('지원하지 않는 결과 값입니다.');
    }
  }

  get winCount() {
    return this.#winCount;
  }

  get drawCount() {
    return this.#drawCount;
  }

  get loseCount() {
    return this.#loseCount;
  }
}

export { Player };
