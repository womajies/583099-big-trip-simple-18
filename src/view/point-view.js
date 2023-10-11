import { createElement } from '../render.js';
import { humanizePointDate } from '../utils.js';

const createOffersTemplate = (offers) => {
  let offersList = '';

  for (const { title, price } of offers) {
    offersList += `<li class="event__offer">
          <span class="event__offer-title">${title}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${price}</span>
        </li>`;
  }

  return `
    <ul class="event__selected-offers">
      ${offersList}
    </ul>
  `;
};

const createPointTemplate = (point, allOffers, destinations) => {
  const { basePrice, type, destination, offers, dateFrom, dateTo } = point;

  const TIME_FORMAT = 'HH:mm';
  const DATE_FORMAT = 'MMM D';

  const humanizeTimeFrom = dateFrom !== null ? humanizePointDate(dateFrom, TIME_FORMAT) : '';
  const humanizeTimeTo = dateTo !== null ? humanizePointDate(dateTo, TIME_FORMAT) : '';
  const humanizeDateFrom = dateFrom !== null ? humanizePointDate(dateFrom, DATE_FORMAT) : '';

  const myDestination = destinations.find((item) => item.id === destination);

  const offersByType = allOffers.find((item) => item.type === type);
  const checkedOffers = offersByType.offers.filter((item) => offers.includes(item.id));

  const offersTemplate = checkedOffers.length ? createOffersTemplate(checkedOffers) : '';

  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${dateFrom}">${humanizeDateFrom}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${type} &mdash; ${myDestination.name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateFrom}">${humanizeTimeFrom}</time>
            &mdash;
            <time class="event__end-time" datetime="${dateTo}">${humanizeTimeTo}</time>
          </p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        ${offersTemplate}
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

export default class PointView {
  constructor(point, allOffers, destinations) {
    this.point = point;
    this.allOffers = allOffers;
    this.destinations = destinations;
  }

  getTemplate() {
    return createPointTemplate(this.point, this.allOffers, this.destinations);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
