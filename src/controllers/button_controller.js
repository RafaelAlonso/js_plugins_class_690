import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ['btn', 'reset']

  disable() {
    this.btnTarget.classList.add('disabled');
    this.btnTarget.innerText = 'Bingo!'
  }

  enable() {
    this.btnTarget.classList.remove('disabled');
    this.btnTarget.innerText = 'Click me!'
  }
}