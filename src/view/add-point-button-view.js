import AbstractView from '../framework/view/abstract-view.js';

function addPointButtonTemplate() {
  return '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';
}

export default class AddPointButtonView extends AbstractView {
  #handleClick = null;

  constructor({ onClick }) {
    super();
    this.#handleClick = onClick;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template() {
    return addPointButtonTemplate();
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}
