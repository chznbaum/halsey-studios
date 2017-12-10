import $ from 'jquery';

class Tabs {
  constructor() {
    this.tabs = $('.tab');
    this.events();
  }

  events() {
    this.tabs.click(this.switchTab.bind(this));
  }

  switchTab(event) {
    event.preventDefault();
    const activeTab = $('.tab.active');
    activeTab.removeClass('active');
    event.target.classList.add('active');
  }
}

export default Tabs;