import { FilterType } from '../const';
import { isPointExpired } from './point';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.PAST]: (points) => points.filter((point) => isPointExpired(point.dateTo)),
  [FilterType.FUTURE]: (points) => points.filter((point) => !isPointExpired(point.dateTo)),
};

export { filter };
