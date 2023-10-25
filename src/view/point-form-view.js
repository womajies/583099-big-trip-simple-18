import AbstractView from '../framework/view/abstract-view.js';
import { humanizePointDate } from '../utils/point.js';
import { CITIES } from '../mock/const.js';

const BLANK_POINT = {
  basePrice: 0,
  dateFrom: new Date(),
  dateTo: new Date(),
  destination: 1,
  offers: [11, 12, 13],
  type: 'flight'
};

const createOffersTemplate = (offers, checkedOffers) => {
  let offersList = '';

  for (const { id, title, price } of offers) {
    offersList += `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox visually-hidden" id="event-offer-luggage-${id}" type="checkbox" name="event-offer-luggage" ${checkedOffers.includes(id) ? 'checked' : ''}>
        <label class="event__offer-label" for="event-offer-luggage-${id}">
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

const createPointEditTemplate = (point, allOffers, destinations) => {
  const { basePrice, type, destination, offers, dateFrom, dateTo } = point;

  const DATE_FORMAT = 'DD/MM/YY HH:mm';

  const myDestination = destinations.find((item) => item.id === destination);

  const offersByType = allOffers.find((item) => item.type === type);

  const destinationTemplate = myDestination ? createDestinationsTemplate(myDestination) : '';
  const offersTemplate = offersByType?.offers.length ? createOffersTemplate(offersByType.offers, offers) : '';
  const datalistOptionTemplate = createDatalistOptionTemplate();

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

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
            <label class="event__label  event__type-output" for="event-destination-${myDestination ? myDestination.id : '1'}">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-${myDestination ? myDestination.id : '1'}" type="text" name="event-destination" value="${myDestination ? myDestination.name : ''}" list="destination-list-${myDestination ? myDestination.id : ''}">
            <datalist id="destination-list-${myDestination ? myDestination.id : '1'}">
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
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
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

export default class PointEditView extends AbstractView {
  #allOffers = null;
  #destinations = null;
  #point = null;
  #handleFormSubmit = null;
  #handleCloseEditClick = null;
  #handleChangeTypeClick = null;

  constructor({ point = BLANK_POINT, allOffers = [], destinations = [], onFormSubmit, onCloseEditClick, onChangeTypeClick }) {
    super();
    this.#point = point;
    this.#allOffers = allOffers;
    this.#destinations = destinations;
    this.#handleFormSubmit = onFormSubmit;
    this.#handleCloseEditClick = onCloseEditClick;
    this.#handleChangeTypeClick = onChangeTypeClick;

    this.element.querySelector('form').addEventListener('submit', this.#submitClickHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#closeEditClickHandler);
    this.element.querySelectorAll('.event__type-input').forEach((item) => item.addEventListener('click', this.#changeTypeClickHandler));
  }

  get template() {
    return createPointEditTemplate(this.#point, this.#allOffers, this.#destinations);
  }

  // #changeTypeClickHandler = (evt) => {
  //   this.#point.type = evt.target.value;
  //   this.element.querySelector('#event-type-toggle-1').checked = false;
  // };

  #submitClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this.#point);
  };

  #closeEditClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleCloseEditClick();
  };

  #changeTypeClickHandler = (evt) => {
    this.#handleChangeTypeClick(evt.target.value);
  };
}
