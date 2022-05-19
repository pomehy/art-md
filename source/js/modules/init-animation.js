export default class Animation {
  constructor() {
    this.animationGroup = [...document.querySelectorAll('[data-animation-group]')];

    this._getAnimatePoint = this._getAnimatePoint.bind(this);
    this._trackingScreenBlock = this._trackingScreenBlock.bind(this);
  }

  _getAnimatePoint(group) {
    const elTop = group.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    return windowHeight / 1.3 - elTop;
  }

  _trackingScreenBlock() {
    if (!this.animationGroup.length) {
      return;
    }

    this.animationGroup.forEach((group) => {
      let point = this._getAnimatePoint(group);

      if (group.classList.contains('[data-footer]')) {
        point = window.innerHeight - group.getBoundingClientRect().height / 2 - group.getBoundingClientRect().top;
      }

      if (point > 0 && !group.classList.contains('is-show')) {
        group.classList.add('is-show');
      }
    });
  }

  init() {
    this._trackingScreenBlock();
    window.addEventListener('scroll', this._trackingScreenBlock);
  }
}
