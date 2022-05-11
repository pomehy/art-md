const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

export default class HeaderNav {
  constructor() {
    this.root = document.querySelector('[data-header]');
    this.toggle = this.root.querySelector('[data-header-toggle]');
    this.defaultOffset = 100;

    this._paintElement = this._paintElement.bind(this);
    this._getCoord = this._getCoord.bind(this);
    this._handlerActiveClass = this._handlerActiveClass.bind(this);
    this._initActiveMenu = this._initActiveMenu.bind(this);
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

  _handlerActiveClass(item) {
    if (item.classList.contains('is-active')) {
      item.classList.remove('is-active');
    } else {
      item.classList.add('is-active');
    }
  }

  _initActiveMenu() {
    this._handlerActiveClass(this.root);
    this._handlerActiveClass(this.toggle);
  }

  init() {
    this._paintElement();
    this.toggle.addEventListener('click', this._initActiveMenu);
    window.addEventListener('scroll', this._paintElement);
  }
}
