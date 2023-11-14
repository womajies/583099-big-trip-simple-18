import AbstractView from '../framework/view/abstract-view.js';
import { FilterType } from '../const.js';

const emptyListTextType = {
  [FilterType.EVERYTHING]: 'Click «ADD NEW TASK» in menu to create your first task',
  [FilterType.PAST]: 'There are no past tasks now',
  [FilterType.FUTURE]: 'There are no future tasks now',
};

const createPointListEmptyTemplate = (filterType) => {
  const emptyListTextValue = emptyListTextType[filterType];

  return (`<p class="trip-events__msg">${emptyListTextValue}</p>`);
};

export default class PointListEmptyView extends AbstractView {
  #filterType = null;

  constructor({ filterType }) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createPointListEmptyTemplate(this.#filterType);
  }
}
