import SortView from '../view/sort-view';
import EventListView from '../view/event-list-view';
import FormEditView from '../view/form-edit-view';
import PointView from '../view/point-view';
import {render} from '../render.js';

export default class BoardPresenter {
  sortComponent = new SortView();
  eventListComponent = new EventListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.sortComponent, this.boardContainer);
    render(this.eventListComponent, this.boardContainer);
    render(new FormEditView(), this.eventListComponent.getElement());

    for(let i = 0; i < 3; i++) {
      render(new PointView(), this.eventListComponent.getElement());
    }
  }
}
