import { generatePoint } from '../mock/point';
import { offersByType } from '../mock/offer';
import { destinations } from '../mock/destination';

export default class PointsModel {
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
}
