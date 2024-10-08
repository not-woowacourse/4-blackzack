import { BlackjackController } from '@/controllers/blackjack.controller';

class App {
  #blackjackController;

  constructor() {
    this.#blackjackController = new BlackjackController();
  }

  async play() {
    await this.#blackjackController.run();
    try {
      // 게임 로직
    } catch (error) {
      console.error('게임 중 오류 발생:', error);
      throw error; // 예외를 다시 던져 테스트에서 잡을 수 있게 함
    }
  }
}

export default App;
