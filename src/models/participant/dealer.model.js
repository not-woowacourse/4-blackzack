import { BLACKJACK_RULE } from '@/lib/constants/blackjack-rule.constant';
import { Cards } from '@/models/card/cards.model';
import { CANDIDATE } from '@/views/output.view.constant';

class Dealer {
  #cards;
  #name;

  constructor() {
    this.#cards = new Cards();
    this.#name = CANDIDATE.DEALER_NAME;
  }

  // Player, Dealer -> Participant 추상 클래스로 빼도 될듯?

  #addCard(card) {
    this.#cards.add(card);
  }

  addCards(cards) {
    cards.forEach((card) => this.#addCard(card));
  }

  checkIsBust() {
    return this.#cards.checkIsBust();
  }

  checkCanDraw() {
    return this.#cards.score <= BLACKJACK_RULE.DEALER_HIT_MAXIMUM_THRESHOLD; // player.checkCanDraw랑 정녕 같은 역할을 한다고 할 수 있을까?
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
}

export { Dealer };
