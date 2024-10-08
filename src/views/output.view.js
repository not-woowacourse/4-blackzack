import { Console } from '@/lib/utils/console.js';
// import { Card } from '../models/card/card.model';

class OutputView {
  static #print(message) {
    Console.print(message);
  }
  static GameStart() {
    this.#print('블랙잭 게임을 시작합니다.');
  }
  static GameEnd(win, draw, lose) {
    const game = win + draw + lose;
    this.#print('블랙잭 게임을 종료합니다.');
    this.#print(`총 ${game}판하였으며, ${win}승 ${draw}무 ${lose}패입니다.`);
  }
  static InitializeCard(name, card1, card2) {
    if (name == '플레이어') {
      this.#print(
        `${name}가 받은 카드는 ${card1.toKoreanString()}, ${card2.toKoreanString()}입니다.`,
      );
    } else {
      this.#print(
        `${name}가 공개한 카드는 ${card1.toKoreanString()}, ${card2.toKoreanString()}입니다.`,
      );
    }
  }

  /*static #Hit(name, card){
        this.#print(`${name}가 히트하였습니다.`); 
        this.#print(`${name}가 받은 카드는 ${card}입니다.`); 
}
    static #Stand(name, sum){
        this.#print(`${name}가 스탠드하였습니다.`);
        this.#print(`${name} 카드의 합은 ${sum}입니다.`);
    }

    static #Bust(name, card){
        this.#print(`${name}가 받은 카드는 ${card}입니다.`); 
        this.#print(`${name}가 버스트입니다.`); 
    }*/

  static Action(name, act, card, sum = 0) {
    // player action
    if (name == '플레이어') {
      switch (act) {
        case 'hit':
          this.#print(`${name}가 받은 카드는 ${card.toKoreanString()}입니다.`);
          break;
        case 'stand':
          this.#print(`${name} 카드의 합은 ${sum}입니다.`);
          break;
        case 'bust':
          this.#print(`${name}가 받은 카드는 ${card.toKoreanString()}입니다.`);
          this.#print(`${name}가 버스트입니다.`);
          break;
      }
    }

    // dealer action
    else {
      switch (act) {
        case 'hit':
          this.#print(`${name}가 히트하였습니다.`);
          this.#print(`${name}가 받은 카드는 ${card.toKoreanString()}입니다.`);
          break;
        case 'stand':
          this.#print(`${name}가 스탠드하였습니다.`);
          this.#print(`${name} 카드의 합은 ${sum}입니다.`);
          break;
        case 'bust':
          this.#print(`${name}가 히트하였습니다.`);
          this.#print(`${name}가 받은 카드는 ${card.toKoreanString()}입니다.`);
          this.#print(`${name}가 버스트입니다.`);
          break;
      }
    }
  }

  static loseGame() {
    this.#print('플레이어가 패배하였습니다 😭');
  }

  static winGame() {
    this.#print('WINNER WINNER CHICKEN DINNER 🍗');
  }

  static drawGame() {
    this.#print('무승부입니다.');
  }
}

export { OutputView };
