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
    slidesPerGroup: 3,
    spaceBetween: 40,
    autoplay: {
      delay: 4000,
    },
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
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 12,
        slidesPerGroup: 1,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
      1023: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
      1279: {
        slidesPerView: 5,
        spaceBetween: 32,
        slidesPerGroup: 3,
      },
      1439: {
        slidesPerView: 5,
        spaceBetween: 32,
        slidesPerGroup: 3,
      },
      1920: {
        slidesPerView: 6,
        spaceBetween: 32,
        slidesPerGroup: 3,
      },
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


