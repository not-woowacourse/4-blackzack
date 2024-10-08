import { Cards } from '@/models/card/cards.model';

class Dealer {
  #cards; //Dealer가 가지고 있는 카드(한 라운드에서)

  constructor() {
    this.#cards = new Cards();
  }

  addCard(card) {
    this.#cards.add(card); //입력된 card를 배열에 추가
  }

  addCards(cards) {
    cards.forEach((card) => this.addCard(card)); //cards 배열을 순회하며 card 요소를 addCard()하기
  }

  checkIsBust() {
    return this.#cards.checkIsBust();
  }

  checkCanDraw() {
    return this.#cards.score <= 16;
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
}

export { Dealer };
