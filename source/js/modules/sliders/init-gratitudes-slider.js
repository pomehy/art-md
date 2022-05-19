/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const partnerSlider = document.querySelector('[data-slider-gratitudes]');

let swiper;
let prevButton;
let nextButton;
let pagination;

const initSwiper = (slider) => {
// eslint-disable-next-line no-undef
  prevButton = slider.closest('[data-slider-gratitudes-container]').querySelector('[data-slider-control-prev]');
  nextButton = slider.closest('[data-slider-gratitudes-container]').querySelector('[data-slider-control-next]');

  swiper = new Swiper(slider, {
    speed: 600,
    loop: true,
    allowTouchMove: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 12,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 24,
        slidesOffsetBefore: 24,
      },
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
      1920: {
        slidesPerView: 'auto',
        spaceBetween: 40,
      },
    },
  });
};

const initGratitudesSlider = () => {
  if (!partnerSlider) {
    return;
  }

  initSwiper(partnerSlider);
};

export {initGratitudesSlider};


