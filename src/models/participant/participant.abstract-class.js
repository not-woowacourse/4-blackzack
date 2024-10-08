import { Cards } from '@/models/card/cards.model';

class Participant {
  #cards;
  #name;

  constructor(name) {
    if (new.target === Participant) {
      throw new TypeError(
        'Participant는 추상 클래스로 설계되었습니다. 직접 인스턴스화할 수 없습니다.',
      );
    }

    this.#cards = new Cards();
    this.#name = name;
  }

  addCards(cards) {
    cards.forEach((card) => this.#cards.add(card));
  }

  checkIsBust() {
    return this.#cards.checkIsBust();
  }

  resetCards() {
    this.#cards.reset();
  }

  get name() {
    return this.#name;
  }

  get cards() {
    return this.#cards.cards;
  }

  get score() {
    return this.#cards.score;
  }

  // Comment by ChatGPT ...ㅎㅎ
  // 서브 클래스에서 필수적으로 구현해야 할 메서드를 정의합니다.
  checkCanDraw() {
    throw new Error('checkCanDraw 메서드는 구현되어야 합니다.');
  }
}

export { Participant };
