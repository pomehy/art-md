const serviceNav = document.querySelector('[data-service-menu]');
import {ScrollLock} from '../utils/scroll-lock';
import {iosChecker} from '../utils/ios-checker';


export default class ServiceNav {
  constructor(element) {
    this.root = element;
    this.button = this.root.querySelector('[data-service-menu-button]');
    this.sublinks = this.root.querySelectorAll('[data-service-sublink]');
    this.scrollLock = new ScrollLock();
    this._iosChecker = iosChecker;

    this._activeMenu = this._activeMenu.bind(this);
    this._handlerSubLinks = this._handlerSubLinks.bind(this);
  }

  _openMenu() {
    if (this._iosChecker()) {
      let serviceMenuCoord = this.root.getBoundingClientRect();
      this.root.classList.add('is-active');
      this.root.style.top = `${serviceMenuCoord.top}px`;
    } else {
      let serviceMenuCoord = this.root.getBoundingClientRect();
      this.scrollLock.disableScrolling();
      this.root.classList.add('is-active');
      this.root.style.top = `${serviceMenuCoord.top}px`;
    }
  }

  _closeMenu() {
    if (this._iosChecker()) {
      this.root.classList.remove('is-active');
      this.root.style.top = '';
    } else {
      this.scrollLock.enableScrolling();

      this.root.classList.remove('is-active');
      this.root.style.top = '';
    }
  }

  _handlerSubLinks() {
    this.sublinks.forEach((sublink) => {
      sublink.addEventListener('click', () => {
        this._closeMenu();
      });
    });
  }

  _activeMenu() {
    this.button.addEventListener('click', () => {
      if (this.root.classList.contains('is-active')) {
        this._closeMenu();
      } else {
        this._openMenu();
      }
    });
  }

  init() {
    this._handlerSubLinks();
    this._activeMenu();
  }
}

const initServiceNav = () => {
  if (!serviceNav) {
    return;
  }

  const serviceNavMenu = new ServiceNav(serviceNav);
  serviceNavMenu.init();
  console.log(serviceNavMenu);
};

export {initServiceNav};
