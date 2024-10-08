import { Console } from '@/lib/utils/console';
import { INPUT_MESSAGE, USER_INPUT } from '@/views/input.view.constant';

class InputView {
  static async #ask(query) {
    return await Console.readLineAsync(query);
  }

  static async askHitOrStand() {
    const answer = await this.#ask(INPUT_MESSAGE.DRAW_CARD);

    return answer === USER_INPUT.YES; // TODO: y/n 이외의 값이 들어올 경우 처리
  }

  static async askContinueToPlay() {
    const answer = await this.#ask(INPUT_MESSAGE.CONTINUE_GAME);

    return answer === USER_INPUT.YES; // TODO: y/n 이외의 값이 들어올 경우 처리
  }
}

export { InputView };
