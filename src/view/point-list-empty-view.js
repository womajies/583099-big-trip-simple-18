import { createElement } from '../render.js';

const createPointListEmptyTemplate = () => '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class PointListEmptyView {
  #element = null;

  get template() {
    return createPointListEmptyTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
