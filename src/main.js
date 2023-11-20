import { render } from './framework/render.js';
import AddPointButtonView from './view/add-point-button-view.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import FilterModel from './model/filter-model.js';
import PointsApiService from './api-services/points-api-service.js';

const AUTHORIZATION = 'Basic sW1sfsh4wcsa2ewq';
const END_POINT = 'https://18.ecmascript.pages.academy/big-trip';

const siteHeaderElement = document.querySelector('.trip-main');
const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteContentElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const filterModel = new FilterModel();
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

filterPresenter.init();
tripPresenter.init();
pointsModel.init()
  .finally(() => {
    render(addPointButtonComponent, siteHeaderElement);
  });
