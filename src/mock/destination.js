import { getRandomArrayElement, getRandomInteger } from '../utils/common.js';
import { CITIES, DESCRIPTIONS } from './const.js';

const destinations = [
  {
    'id': 1,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': `${getRandomArrayElement(CITIES)}`,
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 10)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 2,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': `${getRandomArrayElement(CITIES)}`,
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 10)}`,
        'description': 'Chamonix parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 10)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 3,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': `${getRandomArrayElement(CITIES)}`,
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 10)}`,
        'description': 'Chamonix parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 10)}`,
        'description': 'Chamonix parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 10)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 4,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': `${getRandomArrayElement(CITIES)}`,
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 10)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
];

export { destinations };
