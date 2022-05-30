import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initAccordions} from './modules/accordion/init-accordion';
import {initTabs} from './modules/tabs/init-tabs';

import {initParntersSlider} from './modules/sliders/init-partners-slider';
import {initGratitudesSlider} from './modules/sliders/init-gratitudes-slider';
import {initVideo} from './modules/init-video';
import {initTypedText} from './modules/init-typed-text';
import {initMoveTo} from './modules/init-move-to';
import {initArticlesFilter} from './modules/init-articles-filter';
import HeaderNav from './modules/init-header-control';
import Animation from './modules/init-animation';

import {initFixedBlock} from './modules/init-fixed-tabs-control';
import {initButtonToTop} from './modules/init-button-top-top';
import {initMap} from './modules/init-map';
import {initServiceButtonShow} from './modules/init-service-button-show';

const initHeader = () => {
  const pageHeader = new HeaderNav();
  pageHeader.init();
};

const iniAnimate = () => {
  const animate = new Animation();
  animate.init();
};
//

// ---------------------------------


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initVideo();

  // Modules
  // ---------------------------------
  initTypedText();
  initHeader();
  iniAnimate();
  initMoveTo();
  initAccordions();
  initButtonToTop();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    initCustomSelect();
    initFormValidate();
    initGratitudesSlider();
    initParntersSlider();
    initTabs();
    initArticlesFilter();
    initFixedBlock();
    initMap();
    initServiceButtonShow();
  });
});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
