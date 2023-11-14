import { render } from './framework/render.js';
import AddPointButtonView from './view/add-point-button-view.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteContentElement = document.querySelector('.trip-events');

const filterModel = new FilterModel();
const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter({ tripContainer: siteContentElement, pointsModel, filterModel, onAddPointDestroy: handleAddPointFormClose });
const filterPresenter = new FilterPresenter({
  filterContainer: siteFiltersElement,
  filterModel,
  pointsModel
});

const addPointButtonComponent = new AddPointButtonView({
  onClick: handleAddPointButtonClick
});

function handleAddPointFormClose() {
  addPointButtonComponent.element.disabled = false;
}

function handleAddPointButtonClick() {
  tripPresenter.createPoint();
  addPointButtonComponent.element.disabled = true;
}

render(addPointButtonComponent, siteHeaderElement);

filterPresenter.init();
tripPresenter.init();
