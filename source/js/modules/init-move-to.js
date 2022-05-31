import MoveTo from '../vendor/move-to';

const top = 130;

const initMoveTo = () => {
  const moveTo = new MoveTo({
    tolerance: top,
    duration: 600,
    easing: 'easeOutQuart',
    container: window,
  });

  const triggers = document.querySelectorAll('[data-link-trigger]');
  // const triggersWrapper = document.querySelector('[data-triggers-wrapper]');

  if (triggers) {
    triggers.forEach((trigger) => {
      moveTo.registerTrigger(trigger);

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
  }
};

export {initMoveTo};
