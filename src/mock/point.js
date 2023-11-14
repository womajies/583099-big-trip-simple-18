import { nanoid } from 'nanoid';
import { getRandomArrayElement, getRandomInteger } from '../utils/common.js';
import { Price } from './const.js';
import { offersByType } from './offer.js';

const { type, offers } = getRandomArrayElement(offersByType);

const generatePoint = () => ({
  id: nanoid(),
  basePrice: getRandomInteger(Price.MIN, Price.MAX),
  dateFrom: new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${getRandomInteger(10, 31)}T${getRandomInteger(10, 23)}:${getRandomInteger(10, 59)}:56.845Z`),
  dateTo: new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${getRandomInteger(10, 31)}T${getRandomInteger(10, 23)}:${getRandomInteger(10, 59)}:13.375Z`),
  destination: getRandomInteger(1, 6),
  offers: [getRandomArrayElement(offers).id, getRandomArrayElement(offers).id],
  type: type
});

export { generatePoint };
