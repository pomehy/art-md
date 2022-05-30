export default class ServiceNav {
  constructor() {
    this.root = document.querySelector('[data-service-menu]');
    this.button = this.root.querySelector('[data-service-menu-button]');


    this._activeMenu = this._activeMenu.bind(this);
    // this._trackingScreenBlock = this._trackingScreenBlock.bind(this);
  }

  _activeMenu() {
    this.button.addEventListener('click', () => {
      if (this.root.classList.contains('is-active')) {
        this.root.classList.remove('is-active');
      } else {
        this.root.classList.add('is-active');
      }
    });
  }

  init() {
    this._activeMenu();
  }
}

const initServiceNav = () => {
  const serviceNavMenu = new ServiceNav();
  serviceNavMenu.init();
};

export {initServiceNav};
