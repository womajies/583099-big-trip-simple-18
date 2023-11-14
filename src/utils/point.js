import dayjs from 'dayjs';

const humanizePointDate = (date, format) => date ? dayjs(date).format(format) : '';

const isPointExpired = (date) => date && dayjs().isAfter(date, 'D');

const getWeightForNullValue = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};

const sortPointByDate = (pointA, pointB) => {
  const weight = getWeightForNullValue(pointA.dateFrom, pointB.dateFrom);

  return weight ?? dayjs(pointB.dateFrom).diff(dayjs(pointA.dateFrom));
};

const sortPointByPrice = (pointA, pointB) => {
  const weight = getWeightForNullValue(pointA.basePrice, pointB.basePrice);

  return weight ?? pointB.basePrice - pointA.basePrice;
};

const isValuesEqual = (a, b) => a === b;

export { humanizePointDate, isPointExpired, sortPointByDate, sortPointByPrice, isValuesEqual };
