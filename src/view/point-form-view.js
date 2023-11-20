import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { humanizePointDate } from '../utils/point.js';
import { CITIES } from '../mock/const.js';
import flatpickr from 'flatpickr';
import he from 'he';

import 'flatpickr/dist/flatpickr.min.css';

const BLANK_POINT = {
  basePrice: null,
  dateFrom: new Date(),
  dateTo: new Date(),
  destination: null,
  offers: [],
  type: 'flight'
};

const createOffersTemplate = (offers, checkedOffers) => {
  let offersList = '';

  for (const { id, title, price } of offers) {
    offersList += `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox visually-hidden" id="${id}" type="checkbox" name="event-offer-luggage" ${checkedOffers.includes(id) ? 'checked' : ''}>
        <label class="event__offer-label" for="${id}">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </label>
      </div>
    `;
  }

  return `
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

    <div class="event__available-offers">
      ${offersList}
    </div>
  </section>
  `;
};

const createDestinationsTemplate = (destination) => {
  let picturesList = '';

  for (const { src, description } of destination.pictures) {
    picturesList += `
      <img class="event__photo" src="${src}" alt="${description}">
    `;
  }

  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destination.description}</p>
      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${picturesList}
        </div>
      </div>
    </section>
  `;
};

const createDatalistOptionTemplate = () => {
  let datalist = '';

  for (const city of CITIES) {
    datalist += `
      <option value="${city}"></option>
    `;
  }

  return datalist;
};

const createPointFormTemplate = (point) => {
  const { basePrice, type, offers, destination, dateFrom, dateTo, offersByType, myDestination, isDisabled, isSaving, isDeleting } = point;

  const DATE_FORMAT = 'DD/MM/YY HH:mm';

  const destinationTemplate = myDestination ? createDestinationsTemplate(myDestination) : '';
  const offersTemplate = offersByType?.offers.length ? createOffersTemplate(offersByType.offers, offers) : '';
  const datalistOptionTemplate = createDatalistOptionTemplate();

  const isSubmitDisabled = (dateFrom === null || dateTo === null) || !myDestination || !basePrice;

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox" ${isDisabled ? 'disabled' : ''}>

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>

                <div class="event__type-item">
                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi" ${type === 'taxi' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus" ${type === 'bus' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train" ${type === 'train' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship" ${type === 'ship' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive" ${type === 'drive' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" ${type === 'flight' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in" ${type === 'check-in' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing" ${type === 'sightseeing' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                </div>

                <div class="event__type-item">
                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant" ${type === 'restaurant' ? 'checked' : ''}>
                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                </div>
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-${destination ? destination : '1'}">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-${destination ? destination : '1'}" type="text" name="event-destination" value="${myDestination ? he.encode(myDestination.name) : ''}" list="destination-list-${destination ? destination : '1'}" ${isDisabled ? 'disabled' : ''}>
            <datalist id="destination-list-${destination ? destination : '1'}">
              ${datalistOptionTemplate}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizePointDate(dateFrom, DATE_FORMAT)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizePointDate(dateTo, DATE_FORMAT)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${Number(basePrice)}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit" ${isSubmitDisabled ? 'disabled' : ''}>${isSaving ? 'Saving...' : 'Save'}</button>
          <button class="event__reset-btn" type="reset">${isDeleting ? 'Deleting...' : 'Delete'}</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          ${offersTemplate}

          ${destinationTemplate}
        </section>
      </form>
    </li>`
  );
};

export default class PointFormView extends AbstractStatefulView {
  #allOffers = null;
  #destinations = null;
  #handleFormSubmit = null;
  #handleCloseEditClick = null;
  #handleDeleteClick = null;
  #dateFromDatepicker = null;
  #dateToDatepicker = null;

  constructor({ point = BLANK_POINT, allOffers = [], destinations = [], onFormSubmit, onCloseEditClick, onDeleteClick }) {
    super();
    this._setState(PointFormView.parsePointToState(point, allOffers, destinations));
    this.#allOffers = allOffers;
    this.#destinations = destinations;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseEditClick = onCloseEditClick;
    this.#handleDeleteClick = onDeleteClick;

    this._restoreHandlers();
  }

  get template() {
    return createPointFormTemplate(this._state);
  }

  removeElement() {
    super.removeElement();

    if (this.#dateFromDatepicker) {
      this.#dateFromDatepicker = null;
    }

    if (this.#dateToDatepicker) {
      this.#dateToDatepicker = null;
    }
  }

  _restoreHandlers = () => {
    this.element.querySelector('form').addEventListener('submit', this.#submitClickHandler);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#deleteClickHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeEditClickHandler);
    this.element.querySelector('.event__input--price').addEventListener('input', this.#priceInputHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#destinationChangeHandler);
    this.element.querySelectorAll('.event__type-input[name="event-type"]').forEach((item) => item.addEventListener('click', this.#typeClickHandler));
    this.element.querySelectorAll('.event__offer-checkbox').forEach((item) => item.addEventListener('change', this.#offerChangeHandler));

    this.#setDateFromDatepicker();
    this.#setDateToDatepicker();
  };

  #submitClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(PointFormView.parseStateToPoint(this._state));
  };

  #closeEditClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseEditClick();
  };

  #deleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleDeleteClick(PointFormView.parseStateToPoint(this._state));
  };

  #priceInputHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      basePrice: Number(evt.target.value),
    });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const currentDestination = this.#destinations.find((item) => item.name.toLowerCase() === evt.target.value.toLowerCase());

    this.updateElement({
      destination: currentDestination.id,
      myDestination: currentDestination,
    });
  };

  #typeClickHandler = (evt) => {
    evt.preventDefault();
    this.updateElement({
      type: evt.target.value,
      offers: [],
      offersByType: this.#allOffers.find((item) => item.type === evt.target.value),
    });
  };

  #offerChangeHandler = (evt) => {
    this._setState({
      offers: evt.target.checked ? [...this._state.offers, Number(evt.target.id)] : [...this._state.offers.filter((id) => id !== Number(evt.target.id))],
    });
  };

  #dateFromChangeHandler = ([date]) => {
    this.updateElement({
      dateFrom: date,
    });
  };

  #dateToChangeHandler = ([date]) => {
    this.updateElement({
      dateTo: date,
    });
  };

  #setDateFromDatepicker() {
    if (this._state.dateFrom) {
      this.#dateFromDatepicker = flatpickr(
        this.element.querySelector('#event-start-time-1'),
        {
          dateFormat: 'd/m/y H:i',
          enableTime: true,
          defaultDate: this._state.dateFrom,
          onChange: this.#dateFromChangeHandler,
        },
      );
    }
  }

  #setDateToDatepicker() {
    if (this._state.dateTo) {
      this.#dateToDatepicker = flatpickr(
        this.element.querySelector('#event-end-time-1'),
        {
          dateFormat: 'd/m/y H:i',
          enableTime: true,
          defaultDate: this._state.dateTo,
          onChange: this.#dateToChangeHandler,
        },
      );
    }
  }

  static parsePointToState(point, allOffers, destinations) {
    return {
      ...point,
      offersByType: allOffers.find((item) => item.type === point.type),
      myDestination: destinations.find((item) => item.id === point.destination),
      isDisabled: false,
      isSaving: false,
      isDeleting: false,
    };
  }

  static parseStateToPoint(state) {
    const point = { ...state };

    if (!point.offersByType) {
      point.offers = [];
    }

    if (!point.myDestination) {
      point.destination = null;
    }

    delete point.offersByType;
    delete point.myDestination;
    delete point.isDisabled;
    delete point.isSaving;
    delete point.isDeleting;

    return point;
  }
}
