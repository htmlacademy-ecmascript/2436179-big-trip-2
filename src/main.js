import InfoTripView from './view/info-trip-view.js';
import FilterView from './view/filter-view';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const header = document.querySelector('.page-header');
const infoTripContainer = header.querySelector('.trip-main');
const filterContainer = header.querySelector('.trip-controls__filters');
const main = document.querySelector('.page-main');
const contentContainer = main.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({boardContainer: contentContainer});

render(new InfoTripView(), infoTripContainer, 'afterbegin');
render(new FilterView(), filterContainer);

boardPresenter.init();
