import { Card } from '@/models/card/card.model.js';
import { BlackzackDeckGenerator } from '../../lib/utils/blackzack-deck-generator.js';

class DeckManager {
  #deck;
  #multiple;
  #count;

  constructor(multiple = false, count = 0) {
    this.#multiple = multiple;
    this.#count = count;
    this.#deck = this.#generateNewDeck(multiple, count);
  }

  // 새로운 덱을 생성하는 메서드
  #generateNewDeck() {
    const newBlackzackDeck = BlackzackDeckGenerator.generateNewBlackzackDeck();

    return this.#convertBlackzeckDeckToDeck(newBlackzackDeck);
  }

  #convertBlackzeckDeckToDeck(blackzackDeck) {
    return blackzackDeck.map(({ suit, rank }) => new Card(rank, suit));
  }

  // 한 장의 카드를 뽑는 메서드
  drawCard() {
    if (this.#deck.length === 0) {
      this.#deck = this.#generateNewDeck(this.#multiple, this.#count); // 덱이 없으면 새로 생성
    }
    return this.#deck.pop(); // 덱에서 카드 한 장 뽑기
  }

  // 여러 장의 카드를 뽑는 메서드
  drawMultipleCard(count) {
    const multipleCards = [];
    for (let i = 0; i < count; i++) {
      if (this.#deck.length === 0) {
        this.#deck = this.#generateNewDeck(this.#multiple, this.#count); // 덱이 없으면 새로 생성
      }
      multipleCards.push(this.#deck.pop());
    }
    return multipleCards;
  }
}

export { DeckManager };
