import { USER_INPUT } from '@/lib/constants/user-input.constant';
import { Console } from '@/lib/utils/console';
import { BlackjackValidator } from '@/validators/blackjack.validator';

import { INPUT_MESSAGE } from './input.view.constant';

/**
 * 모든 메서드가 static인데 왜 객체가 아닌 class로 만드는가?
 * @See {@link https://github.com/woowacourse-precourse/javascript-baseball-6/pull/384/files#r1373021099}
 */
class InputView {
  static async #ask(query) {
    return await Console.readLineAsync(query);
  }

  static async askHitOrStand() {
    const answer = await this.#ask(INPUT_MESSAGE.DRAW_CARD);

    BlackjackValidator.validateYesOrNo(answer);
    return answer === USER_INPUT.YES;
  }

  static async askContinueToPlay() {
    const answer = await this.#ask(INPUT_MESSAGE.CONTINUE_GAME);

    BlackjackValidator.validateYesOrNo(answer);
    return answer === USER_INPUT.YES;
  }
}

export { InputView };
