import TripView from '../view/trip-view.js';
import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import PointEditView from '../view/point-edit-view.js';
import {render} from '../render.js';

export default class TripPresenter {
  tripComponent = new TripView();
  pointListComponent = new PointListView();

  init = (tripContainer) => {
    this.tripContainer = tripContainer;

    render(this.tripComponent, this.tripContainer);
    render(new SortView(), this.tripComponent.getElement());
    render(this.pointListComponent, this.tripComponent.getElement());
    render(new PointEditView(), this.pointListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.pointListComponent.getElement());
    }
  };
}
