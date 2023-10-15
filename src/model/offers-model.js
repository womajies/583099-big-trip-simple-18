import { offersByType } from '../mock/offer';

export default class OffersModel {
  #offersByType = offersByType;

  get offers() {
    return this.#offersByType;
  }
}
