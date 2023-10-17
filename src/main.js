import FilterView from './view/filter-view.js';
import { render } from './framework/render.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteContentElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter(siteContentElement, pointsModel);

render(new FilterView(), siteFiltersElement);

tripPresenter.init();
