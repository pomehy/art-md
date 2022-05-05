const header = document.querySelector('[data-header]');
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

const defaultOffset = 100;


const paintHeader = () => {
  const currentScroll = scrollPosition();

  if (!header.classList.contains('is-painted')) {
    return;
  }

  if (currentScroll > defaultOffset) {
    header.classList.remove('header--transparent');
  } else if (currentScroll < defaultOffset) {
    header.classList.add('header--transparent');
  }
};

const initHeader = () => {
  if (!header) {
    return;
  }

  window.addEventListener('scroll', paintHeader);
};

export {initHeader};
