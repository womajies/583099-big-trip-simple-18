import { generatePoint } from '../mock/point';

export default class PointsModel {
  points = Array.from({length: 4}, generatePoint);

  get = () => this.points;
}