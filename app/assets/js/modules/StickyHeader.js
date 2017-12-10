import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.lazyImages = $('.lazyload');
    this.header = $('.header');
    this.headerTriggerElement = $('.header-trigger');
    this.createHeaderWaypoint();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.lazyImages.on('load', function() {
      Waypoint.refreshAll();
    });
  }

  createHeaderWaypoint() {
    console.log('Running createHeaderWaypoint');
    const that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.header.addClass('header--transparent');
        } else {
          that.header.removeClass('header--transparent');
        }
      }
    });
  }
}

export default StickyHeader;