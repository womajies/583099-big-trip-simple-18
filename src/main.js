import FilterView from './view/filter-view.js';
import {render} from './render.js';
import TripPresenter from './presenter/trip-presenter.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteContentElement = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter();

render(new FilterView(), siteFiltersElement);

tripPresenter.init(siteContentElement);
