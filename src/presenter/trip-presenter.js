import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form-view.js';
import PointListEmptyView from '../view/point-list-empty-view.js';
import { render } from '../render.js';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #offersModel = null;
  #destinationsModel = null;
  #tripPoints = [];
  #offersByType = [];
  #destinations = [];

  #pointListComponent = new PointListView();

  constructor(tripContainer, pointsModel, offersModel, destinationsModel) {
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init = () => {
    this.#tripPoints = [...this.#pointsModel.points];
    this.#offersByType = [...this.#offersModel.offers];
    this.#destinations = [...this.#destinationsModel.destinations];

    this.#renderTripComponent();
  };

  #renderTripComponent = () => {
    render(new SortView(), this.#tripContainer);

    if (this.#tripPoints.length) {
      render(this.#pointListComponent, this.#tripContainer);
    } else {
      render(new PointListEmptyView(), this.#tripContainer);
    }

    for (let i = 0; i < this.#tripPoints.length; i++) {
      this.#renderPoint(this.#tripPoints[i], this.#offersByType, this.#destinations);
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
