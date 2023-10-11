import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import PointFormView from '../view/point-form-view.js';
import {render} from '../render.js';

export default class TripPresenter {
  pointListComponent = new PointListView();

  init = (tripContainer, pointsModel, offersModel, destinationsModel) => {
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
    this.offersModel = offersModel;
    this.destinationsModel = destinationsModel;
    this.tripPoints = [...this.pointsModel.get()];
    this.offersByType = [...this.offersModel.get()];
    this.destinations = [...this.destinationsModel.get()];

    render(new SortView(), this.tripContainer);
    render(this.pointListComponent, this.tripContainer);
    render(new PointFormView(this.tripPoints[0], this.offersByType, this.destinations), this.pointListComponent.getElement());

    for (let i = 1; i < this.tripPoints.length; i++) {
      render(new PointView(this.tripPoints[i], this.offersByType, this.destinations), this.pointListComponent.getElement());
    }
  };
}
