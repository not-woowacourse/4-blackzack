import { GAME_RESULT } from '@/lib/constants/game-result.constant';

import { Participant } from './participant.abstract-class';

class Player extends Participant {
  #winCount;
  #drawCount;
  #loseCount;

  constructor(name) {
    super(name);
    this.#winCount = 0;
    this.#drawCount = 0;
    this.#loseCount = 0;
  }

  checkCanDraw() {
    return !this.checkIsBust();
  }

  #increaseWinCount() {
    this.#winCount++;
  }

  #increaseDrawCount() {
    this.#drawCount++;
  }

  #increaseLoseCount() {
    this.#loseCount++;
  }

  updateResult(result) {
    // 애초에 result에 GameResult 타입만 올 수 있게 하면 되는데 말이지 ....
    switch (result) {
      case GAME_RESULT.WIN:
        this.#increaseWinCount();
        break;
      case GAME_RESULT.DRAW:
        this.#increaseDrawCount();
        break;
      case GAME_RESULT.LOSE:
        this.#increaseLoseCount();
        break;
      default:
        throw new Error('지원하지 않는 결과 값입니다.');
    }
  }

  get winCount() {
    return this.#winCount;
  }

  get drawCount() {
    return this.#drawCount;
  }

  get loseCount() {
    return this.#loseCount;
  }
}

export { Player };
