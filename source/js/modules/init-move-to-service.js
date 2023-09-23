import MoveTo from '../vendor/move-to';
const breakpointMD = window.matchMedia('(max-width:1023px)');
const breakpointSM = window.matchMedia('(max-width:767px)');
const breakpointS = window.matchMedia('(max-width:374px)');
const currentUrl = window.location.pathname;


const initMoveToService = () => {
  const getTolerance = () => {
    let height;
    if (breakpointS.matches) {
      height = 100;
    } else if (breakpointSM.matches) {
      height = 110;
    } else if (breakpointMD.matches) {
      height = 110;
    } else if (currentUrl === '/index.html' || '') {
      height = 90;
    } else {
      height = 120;
    }

    return height;
  };

  const moveToService = new MoveTo({
    tolerance: getTolerance(),
    duration: 600,
    easing: 'easeOutQuart',
    container: window,
  });

  const triggers = document.querySelectorAll('[data-link-trigger]');

  if (!triggers.length) {
    return;
  }

  triggers.forEach((trigger) => {
    moveToService.registerTrigger(trigger);
    trigger.addEventListener('click', () => {
      let array = Array.from(triggers);
      let index = array.indexOf(trigger);
      array.forEach((item, i) => {
        if (i === index) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });
    });
  });
};

export {initMoveToService};
