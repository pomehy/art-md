// import {ScrollLock} from '../../utils/scroll-lock';
import {ScrollLock} from '../utils/scroll-lock';

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

export default class HeaderNav {
  constructor() {
    this._scrollLock = new ScrollLock();
    this.defaultOffset = 100;

    this.root = document.querySelector('[data-header]');
    this.toggle = this.root.querySelector('[data-header-toggle]');
    this.mainNavOverlay = this.root.querySelector('[data-main-nav-overlay]');

    this._paintElement = this._paintElement.bind(this);
    this._getCoord = this._getCoord.bind(this);
    this._handlerActiveClass = this._handlerActiveClass.bind(this);
    this._initActiveMenu = this._initActiveMenu.bind(this);
    this._closeMainNav = this._closeMainNav.bind(this);
  }

  _getCoord(item) {
    return item.getBoundingClientRect().top;
  }

  _paintElement() {
    const currentScroll = scrollPosition();

    if (!this.root.classList.contains('is-painted')) {
      return;
    }

    if (currentScroll > this.defaultOffset) {
      this.root.classList.remove('is-transparent');
    } else if (currentScroll < this.defaultOffset) {
      this.root.classList.add('is-transparent');
    }
  }

  _closeMainNav() {
    this.root.classList.remove('is-active');
    this.toggle.classList.remove('is-active');
    this._scrollLock.enableScrolling();
  }

  _handlerActiveClass(item, scrollOff) {
    if (item.classList.contains('is-active')) {
      if (scrollOff === true) {
        this._scrollLock.enableScrolling();
      }
      item.classList.remove('is-active');
    } else {
      if (scrollOff === true) {
        this._scrollLock.disableScrolling();
      }
      item.classList.add('is-active');
    }
  }

  _initActiveMenu() {
    this._handlerActiveClass(this.root, true);
    this._handlerActiveClass(this.toggle, false);
  }

  init() {
    this._paintElement();
    this.toggle.addEventListener('click', this._initActiveMenu);
    this.mainNavOverlay.addEventListener('click', this._closeMainNav);
    window.addEventListener('scroll', this._paintElement);
  }
}
