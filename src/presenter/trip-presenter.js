import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form-view.js';
import PointListEmptyView from '../view/point-list-empty-view.js';
import { render, remove, replace } from '../framework/render.js';

export default class TripPresenter {
  #tripContainer = null;
  #pointsModel = null;
  #points = [];
  #pointsOffersByType = [];
  #pointsDestinations = [];

  #pointListComponent = new PointListView();

  constructor({ tripContainer, pointsModel }) {
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
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const pointComponent = new PointView({
      point,
      allOffers: offers,
      destinations,
      onEditClick: () => {
        replacePointToForm.call(this);
        document.addEventListener('keydown', onEscKeyDown);
      }
    });

    let pointFormComponent;

    function replaceFormToPoint() {
      replace(pointComponent, pointFormComponent);
      remove(pointFormComponent);
    }

    function replacePointToForm() {
      pointFormComponent = new PointFormView({
        point,
        allOffers: offers,
        destinations,
        onFormSubmit: () => {
          replaceFormToPoint.call(this);
          document.removeEventListener('keydown', onEscKeyDown);
        },
        onCloseEditClick: () => {
          replaceFormToPoint.call(this);
          document.removeEventListener('keydown', onEscKeyDown);
        }
      });

      replace(pointFormComponent, pointComponent);
    }

    render(pointComponent, this.#pointListComponent.element);
  };
}
