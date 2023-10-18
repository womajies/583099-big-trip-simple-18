import FilterView from './view/filter-view.js';
import { render } from './framework/render.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import { generateFilter } from './mock/filter.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteContentElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter({ tripContainer: siteContentElement, pointsModel });

const filters = generateFilter(pointsModel.points);

render(new FilterView(filters), siteFiltersElement);

tripPresenter.init();
