import Typed from '../vendor/typed';

const typedEl = document.querySelector('[data-typing-text]');
const typedText = document.querySelector('[data-template-text]');


const initTypedText = () => {
  const options = {
    stringsElement: typedText,
    startDelay: 500,
    backDelay: 2000,
    typeSpeed: 80,
    backSpeed: 80,
    loop: true,
  };

  // eslint-disable-next-line no-unused-vars
  const typed = new Typed(typedEl, options);
};


export {initTypedText};
