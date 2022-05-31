const breakpointMD = window.matchMedia('(max-width:1023px)');
const breakpointSM = window.matchMedia('(max-width:767px)');

const tabsControl = document.querySelector('.tabs__controls');
const serviceNav = document.querySelector('[data-service-menu]');

export default class DecorBlock {
  constructor(element) {
    this.root = element;

    this._getCoord = this._getCoord.bind(this);
    this._getHeight = this._getHeight.bind(this);
    this._handlerClassDecor = this._handlerClassDecor.bind(this);
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

  _handlerClassDecor() {
    let height = this._getHeight();
    let coordBlock = this._getCoord();
    if (coordBlock < height || coordBlock === height) {
      this.root.classList.add('is-decor');
    } else {
      this.root.classList.remove('is-decor');
    }
  }

  init() {
    this._handlerClassDecor();
    window.addEventListener('scroll', this._handlerClassDecor);
  }
}


const initDecorBlock = () => {
  if (!tabsControl) {
    return;
  }

  const decordBlock = new DecorBlock(tabsControl);
  decordBlock.init();
};

const initDecorServiceNav = () => {
  if (!serviceNav) {
    return;
  }

  const decorServiceNav = new DecorBlock(serviceNav);
  decorServiceNav.init();
};

export {initDecorBlock, initDecorServiceNav};
