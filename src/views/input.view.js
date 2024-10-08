import { Console } from '@/lib/utils/console.js';
class InputView {
  static async #ask(query) {
    return await Console.readLineAsync(query);
  }

  static #print(message) {
    Console.print(message);
  }

  static async askMoreAction(act) {
    // more draw
    if (act == 'draw') {
      while (true) {
        const answer = await this.#ask('카드를 더 받으시겠습니까? (y/n): ');

        if (answer == 'y' || answer == 'n') {
          return answer == 'y'; // 'y'이면 true, 'n'이면 false 반환
        }

        throw this.#print('잘못된 입력입니다. y 또는 n을 입력해주세요.');
      }
    }
    // more game
    else {
      while (true) {
        const answer = await this.#ask('게임을 계속하시겠습니까? (y/n): ');

        if (answer == 'y' || answer == 'n') {
          return answer == 'y'; // 'y'이면 true, 'n'이면 false 반환
        }

        throw this.#print('잘못된 입력입니다. y 또는 n을 입력해주세요.');
      }
    }
  }
}
export { InputView };
