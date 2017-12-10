import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class HalseySmoothScroll {
  constructor() {
    this.toTopLink = $('.button--to-top');
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.toTopLink.smoothScroll();
  }
}

export default HalseySmoothScroll;