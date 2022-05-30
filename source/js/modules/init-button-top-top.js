const buttonToTop = document.querySelector('[data-to-top]');

const handlerButtonToTop = () => {
  if (!buttonToTop) {
    return;
  }

  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > 800) {
    buttonToTop.classList.add('is-show');
  } else {
    buttonToTop.classList.remove('is-show');
  }

};

const initButtonToTop = () => {
  window.addEventListener('scroll', handlerButtonToTop);
};

export {initButtonToTop};
