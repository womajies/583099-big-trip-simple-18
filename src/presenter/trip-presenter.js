import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointListEmptyView from '../view/point-list-empty-view.js';
import PointPresenter from './point-presenter.js';
import { updateItem } from '../utils/common.js';
import { sortPointByDate, sortPointByPrice } from '../utils/point.js';
import { render, RenderPosition } from '../framework/render.js';
import { SortType } from '../const.js';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #points = [];
  #pointsOffersByType = [];
  #pointsDestinations = [];
  #pointPresenter = new Map();
  #currentSortType = null;
  // #sourcedPoints = []; //Если вдруг захотим возвращаться к дефолтному состоянию сортировки

  #pointListComponent = new PointListView();
  #sortComponent = null;
  #pointListEmptyComponent = new PointListEmptyView();

  constructor({ tripContainer, pointsModel }) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init = () => {
    this.#points = [...this.#pointsModel.points];
    this.#pointsOffersByType = [...this.#pointsModel.offersByType];
    this.#pointsDestinations = [...this.#pointsModel.destinations];

    // this.#sourcedPoints = [...this.#pointsModel.points];

    this.#renderTrip();
  };

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  };

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    // this.#sourcedPoints = updateItem(this.#sourcedPoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint, this.#pointsOffersByType, this.#pointsDestinations);
  };

  #sortPoints = (sortType) => {
    switch (sortType) {
      case SortType.DAY:
        this.#points.sort(sortPointByDate);
        break;
      case SortType.PRICE:
        this.#points.sort(sortPointByPrice);
        break;
      default:

      // this.points = [...this.#sourcedPoints];
    }

    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPointList();
  };

  #renderSort() {
    this.#sortComponent = new SortView({
      onSortTypeChange: this.#handleSortTypeChange
    });

    render(this.#sortComponent, this.#tripContainer, RenderPosition.AFTERBEGIN);
  }

  #renderPointList() {
    render(this.#pointListComponent, this.#tripContainer);

    this.#renderPoints();
  }

  #renderEmptyPointList() {
    render(this.#pointListEmptyComponent, this.#tripContainer);
  }

  #renderPoint(point, offers, destinations) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#pointListComponent.element,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point, offers, destinations);
    this.#pointPresenter.set(point.id, pointPresenter);
  }

  #renderPoints() {
    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i], this.#pointsOffersByType, this.#pointsDestinations);
    }
  }

  #clearPointList() {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  }

  #renderTrip() {
    if (!this.#points.length) {
      this.#renderEmptyPointList();
      return;
    }

    this.#renderSort();
    this.#renderPointList();
  }
}
