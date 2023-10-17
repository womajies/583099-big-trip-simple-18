import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form-view.js';
import PointListEmptyView from '../view/point-list-empty-view.js';
import { render } from '../framework/render.js';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #points = [];
  #pointsOffersByType = [];
  #pointsDestinations = [];

  #pointListComponent = new PointListView();

  constructor(tripContainer, pointsModel) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init = () => {
    this.#points = [...this.#pointsModel.points];
    this.#pointsOffersByType = [...this.#pointsModel.offersByType];
    this.#pointsDestinations = [...this.#pointsModel.destinations];

    this.#renderTripComponent();
  };

  #renderTripComponent = () => {
    render(new SortView(), this.#tripContainer);

    if (this.#points.length) {
      render(this.#pointListComponent, this.#tripContainer);
    } else {
      render(new PointListEmptyView(), this.#tripContainer);
    }

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPoint(this.#points[i], this.#pointsOffersByType, this.#pointsDestinations);
    }
  };

  #renderPoint = (point, offers, destinations) => {
    const pointComponent = new PointView(point, offers, destinations);
    let pointFormComponent;

    const replaceFormToPoint = () => {
      this.#pointListComponent.element.replaceChild(pointComponent.element, pointFormComponent.element);
      pointFormComponent.removeElement();
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const replacePointToForm = () => {
      pointFormComponent = new PointFormView(point, offers, destinations);
      this.#pointListComponent.element.replaceChild(pointFormComponent.element, pointComponent.element);

      pointFormComponent.element.querySelector('form').addEventListener('submit', (evt) => {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      });

      pointFormComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
        replaceFormToPoint();
      });
    };

    pointComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToForm();
      document.addEventListener('keydown', onEscKeyDown);
    });

    render(pointComponent, this.#pointListComponent.element);
  };
}
