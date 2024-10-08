import { BlackzackController } from '@/controllers/blackzack.controller';

class App {
  #blackzackController;

  constructor() {
    this.#blackzackController = new BlackzackController();
  }

  async play() {
    await this.#blackzackController.run();
  }
}

export default App;
