import { getRandomArrayElement, getRandomInteger } from '../utils/common.js';
import { CITIES, DESCRIPTIONS } from './const.js';

const destinations = [
  {
    'id': 1,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[0],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 2,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[1],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 3,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[2],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      },
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 4,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[3],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 5,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[4],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 6,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[5],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
];

export { destinations };
