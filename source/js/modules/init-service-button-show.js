const serviceItemContainers = document.querySelectorAll('[data-service-item-container]');

const initServiceButtonShow = () => {
  if (!serviceItemContainers.length) {
    return;
  }

  const limitItem = 2;

  for (let i = 0; i < serviceItemContainers.length; i++) {
    const audioItems = serviceItemContainers[i].querySelectorAll('[data-audio-item]');
    const buttonShow = serviceItemContainers[i].querySelector('[data-service-show-more]');

    for (let j = 0; j < audioItems.length; j++) {
      if (j > limitItem) {
        audioItems[j].classList.add('is-hidden');

        buttonShow.addEventListener('click', () => {
          if (audioItems[j].classList.contains('is-hidden')) {
            audioItems[j].classList.remove('is-hidden');
          } else {
            audioItems[j].classList.add('is-hidden');
          }
          buttonShow.classList.add('is-hidden');
        });
      }
    }
  }
};

export {initServiceButtonShow};
