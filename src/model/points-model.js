import Observable from '../framework/observable.js';
import { generatePoint } from '../mock/point.js';
import { offersByType } from '../mock/offer.js';
import { destinations } from '../mock/destination.js';

export default class PointsModel extends Observable {
  #points = Array.from({length: 4}, generatePoint);
  #offersByType = offersByType;
  #destinations = destinations;

  get points() {
    return this.#points;
  }

  get offersByType() {
    return this.#offersByType;
  }

  get destinations() {
    return this.#destinations;
  }

  updatePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      update,
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType, update);
  }

  addPoint(updateType, update) {
    this.#points = [
      update,
      ...this.#points,
    ];

    this._notify(updateType, update);
  }

  deletePoint(updateType, update) {
    const index = this.#points.findIndex((point) => point.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting point');
    }

    this.#points = [
      ...this.#points.slice(0, index),
      ...this.#points.slice(index + 1),
    ];

    this._notify(updateType);
  }
}
