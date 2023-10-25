import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form-view.js';
import { render, remove, replace } from '../framework/render.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #handleModeChange = null;

  #pointComponent = null;
  #pointFormComponent = null;

  #point = null;
  #offers = null;
  #destinations = null;
  #mode = Mode.DEFAULT;

  constructor({ pointListContainer, onDataChange, onModeChange }) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point, offers, destinations) {
    this.#point = point;
    this.#offers = offers;
    this.#destinations = destinations;

    const prevPointComponent = this.#pointComponent;
    const prevPointFormComponent = this.#pointFormComponent;

    this.#pointComponent = new PointView({
      point: this.#point,
      allOffers: this.#offers,
      destinations: this.#destinations,
      onEditClick: this.#handleEditClick,
    });

    if (prevPointComponent === null || prevPointFormComponent === null) {
      render(this.#pointComponent, this.#pointListContainer);
      return;
    }

    // if (this.#pointListContainer.contains(prevPointComponent.element)) {
    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    // if (this.#pointListContainer.contains(prevPointFormComponent.element)) {
    if (this.#mode === Mode.EDITING) {
      replace(this.#pointFormComponent, prevPointFormComponent);
    }

    remove(prevPointComponent);
    remove(prevPointFormComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#pointFormComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToPoint();
    }
  }

  #replacePointToForm() {
    this.#pointFormComponent = new PointFormView({
      point: this.#point,
      allOffers: this.#offers,
      destinations: this.#destinations,
      onFormSubmit: this.#handleFormSubmit,
      onCloseEditClick: this.#handleCloseEditClick,
      onChangeTypeClick: this.#handleChangeTypeClick,
    });

    replace(this.#pointFormComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#onEscKeyDown);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToPoint() {
    replace(this.#pointComponent, this.#pointFormComponent);
    remove(this.#pointFormComponent);
    document.removeEventListener('keydown', this.#onEscKeyDown);
    this.#mode = Mode.DEFAULT;
  }

  #onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = (point) => {
    this.#handleDataChange(point);
    this.#replaceFormToPoint();
  };

  #handleCloseEditClick = () => {
    this.#replaceFormToPoint();
  };

  #handleChangeTypeClick = (type) => {
    this.#handleDataChange({...this.#point, type: type});
  };
}
