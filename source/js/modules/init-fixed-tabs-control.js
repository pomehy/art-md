const breakpointMD = window.matchMedia('(max-width:1023px)');
const breakpointSM = window.matchMedia('(max-width:767px)');

const tabsControl = document.querySelector('.tabs__controls');
const serviceNavMenu = document.querySelector('[data-service-menu]');

export default class FixedBlock {
  constructor(element) {
    this.root = element;

    this._getCoord = this._getCoord.bind(this);
    this._getHeight = this._getHeight.bind(this);
    this._handlerFixedClass = this._handlerFixedClass.bind(this);
    this.init = this.init.bind(this);
  }

  _getCoord() {
    return this.root.getBoundingClientRect().top;
  }

  _getHeight() {
    let height;

    if (breakpointMD.matches) {
      height = 89;
    } else if (breakpointSM.matches) {
      height = 77;
    } else {
      height = 95;
    }

    return height;
  }

  _handlerFixedClass() {
    const height = this._getHeight();
    const coordBlock = this._getCoord();

    if (coordBlock < height || coordBlock === height) {
      this.root.classList.add('is-fixed');
    } else {
      this.root.classList.remove('is-fixed');
    }
  }

  init() {
    this._handlerFixedClass();
    window.addEventListener('scroll', this._handlerFixedClass);
  }
}


const initFixedBlock = () => {
  if (!tabsControl) {
    return;
  }

  const fixedBlock = new FixedBlock(tabsControl);
  fixedBlock.init();
};

const initFixedServiceMenu = () => {
  if (!serviceNavMenu) {
    return;
  }

  const fixedServiceMenu = new FixedBlock(serviceNavMenu);
  fixedServiceMenu.init();
};

export {initFixedBlock, initFixedServiceMenu};
