import { Console } from '@/lib/utils/console';

class InputView {
  static async #ask(query) {
    return await Console.readLineAsync(query);
  }

  static async askWantsToDraw() {
    const answer = await this.#ask('카드를 더 받으시겠습니까? (y/n) : ');

    return answer === 'y';
  }

  static async askWantsToPlay() {
    const answer = await this.#ask('게임을 계속하시겠습니까? (y/n) : ');

    return answer === 'y';
  }
}

export { InputView };
