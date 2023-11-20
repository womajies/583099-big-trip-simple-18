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
  {
    'id': 7,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[6],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 8,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[7],
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
    'id': 9,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[8],
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
    'id': 10,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[9],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 11,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[10],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 12,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[1],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 13,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[12],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 14,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[13],
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
    'id': 15,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[14],
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
    'id': 16,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[15],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 17,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[16],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 18,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[17],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 19,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[18],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 20,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[19],
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
    'id': 21,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[20],
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
    'id': 22,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[21],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 23,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[22],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 24,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[23],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 25,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[24],
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
    'id': 26,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[25],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 27,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[26],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
  {
    'id': 28,
    'description': `${getRandomArrayElement(DESCRIPTIONS)}`,
    'name': CITIES[27],
    'pictures': [
      {
        'src': `https://loremflickr.com/248/152?random=${getRandomInteger(0, 100)}`,
        'description': 'Chamonix parliament building'
      }
    ]
  },
];

export { destinations };
