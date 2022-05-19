import MoveTo from '../vendor/move-to';

const initMoveTo = () => {
  const moveTo = new MoveTo({
    tolerance: 90,
    duration: 600,
    easing: 'easeOutQuart',
    container: window,
  });

  const triggers = document.querySelectorAll('[data-link-trigger]');
  // const triggersWrapper = document.querySelector('.page-template__navigation');

  if (triggers) {
    for (let i = 0; i < triggers.length; i++) {
      moveTo.registerTrigger(triggers[i]);

      // triggers[i].addEventListener('click', () => {
      //   let currentLink = triggersWrapper.getElementsByClassName('is-active');
      //   currentLink[0].className = currentLink[0].className.replace('is-active', '');
      //   triggers[i].classList.add('is-active');
      // });
    }
  }
};

export {initMoveTo};
