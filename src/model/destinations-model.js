import { destinations } from '../mock/destination';

export default class DestinationsModel {
  destinations = destinations;

  get = () => this.destinations;
}
