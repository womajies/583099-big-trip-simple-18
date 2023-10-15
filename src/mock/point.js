import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { Price } from './const.js';
import { offersByType } from './offer.js';

const { type, offers } = getRandomArrayElement(offersByType);

const generatePoint = () => ({
  basePrice: getRandomInteger(Price.MIN, Price.MAX),
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: getRandomInteger(1, 4),
  offers: [getRandomArrayElement(offers).id, getRandomArrayElement(offers).id],
  type: type
});

export { generatePoint };
