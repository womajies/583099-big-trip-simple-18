import { getRandomInteger } from '../utils.js';
import { Price } from './const.js';

const generatePoint = () => ({
  basePrice: getRandomInteger(Price.MIN, Price.MAX),
  dateFrom: '2019-07-10T22:55:56.845Z',
  dateTo: '2019-07-11T11:22:13.375Z',
  destination: getRandomInteger(1, 4),
  offers: [11, 12],
  type: 'flight'
});

export { generatePoint };
