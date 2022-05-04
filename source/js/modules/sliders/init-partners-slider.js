/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const partnerSlider = document.querySelector('[data-slider-partner]');

let swiper;
let prevButton;
let nextButton;
let pagination;

const initSwiper = (slider) => {
// eslint-disable-next-line no-undef
  prevButton = slider.closest('[data-slider-partner-container]').querySelector('[data-slider-control-prev]');
  nextButton = slider.closest('[data-slider-partner-container]').querySelector('[data-slider-control-next]');
  pagination = slider.closest('[data-slider-partner-container]').querySelector('[data-slider-pagination]');

  swiper = new Swiper(slider, {
    speed: 600,
    loop: true,
    allowTouchMove: true,
    slidesPerView: 6,
    spaceBetween: 40,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    pagination: {
      el: pagination,
      clickable: true,
      bulletClass: 'slider-pagination__button',
      bulletActiveClass: 'is-active',
    },
  });
};

const initParntersSlider = () => {
  if (!partnerSlider) {
    return;
  }

  initSwiper(partnerSlider);
};

export {initParntersSlider};

// breakpoints: {
//   320: {
//     slidesPerView: 'auto',
//     spaceBetween: 10,
//   },
//   768: {
//     slidesPerView: 'auto',
//     spaceBetween: 20,
//   },
// },
