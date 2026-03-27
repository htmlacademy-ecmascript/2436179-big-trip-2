import { createElement } from '../render.js';

function createPointTemplate() {
  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="2019-03-18">MAR 18</time>
        <div class="event__type">
          <img class="event__type-icon" width="17" height="17" src="img/icons/bus.png" alt="Event type icon">
        </div>
        <h3 class="event__title">Bus to Amsterdam</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
            —
            <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
          </p>
          <p class="event__duration">30M</p>
        </div>
        <p class="event __price">
          €&nbsp;<span class="event__price-value">20</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">Add luggage</span>
            +€&nbsp;
            <span class="event__offer-price">30</span>
          </li>
          <li class="event__offer">
            <span class="event__offer-title">Switch to comfort</span>
            +€&nbsp;
            <span class="event__offer-price">100</span>
          </li>
        </ul>
      </div>
    </li>`);
}

export default class PointView {
  getTemplate() {
    return createPointTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
