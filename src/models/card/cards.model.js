import { sum } from 'es-toolkit';

class Cards {
  #cards = []; // 여러 장의 카드를 담을 배열
  #score = 0; // 총 점수

  // 카드 추가 메서드
  add(card) {
    // 카드 배열에 카드 추가
    // 점수 업데이트
    this.#cards.push(card); // {suit, rank}
    this.#updateScore();
  }

  // 점수 업데이트 메서드
  #updateScore() {
    // 카드 배열의 각 카드의 점수를 합산하여 #score에 저장
    this.#score = sum(this.#cards.map((card) => card.TransfertoScore));
  }
  // 버스트 확인 메서드
  checkIsBust() {
    // 점수가 21을 넘으면 true, 그렇지 않으면 false
    return this.#score > 21;
  }

  // 리셋 메서드 (카드 배열과 점수 초기화)
  reset() {
    this.#cards = [];
    this.#score = 0;
  }

  get score() {
    return this.#score;
  }
}

export { Cards };
