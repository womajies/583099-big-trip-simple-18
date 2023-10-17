import AbstractView from '../framework/view/abstract-view.js';

const createPointListViewTemplate = () => '<ul class="trip-events__list"></ul>';

export default class PointListView extends AbstractView {
  get template() {
    return createPointListViewTemplate();
  }
}
