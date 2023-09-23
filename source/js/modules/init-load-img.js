const imageLazyContainers = document.querySelectorAll('[data-image-lazy]');

const initLoadImg = () => {
  const getSrcImage = (imageWrapper) => {
    const imageElements = imageWrapper.querySelectorAll('img');
    const webpImagesElements = imageWrapper.querySelectorAll('source');

    for (let k = 0; k < imageElements.length; k++) {
      imageElements[k].src = imageElements[k].dataset.src;
      imageElements[k].srcset = imageElements[k].dataset.srcset;
    }

    for (let k = 0; k < webpImagesElements.length; k++) {
      webpImagesElements[k].srcset = webpImagesElements[k].dataset.srcset;
    }
  };

  const uploadImages = (container) => {
    const prevSection = container.previousElementSibling;

    if (prevSection) {
      window.addEventListener('scroll', () => {
        const coordPrevSection = prevSection.getBoundingClientRect();
        if (coordPrevSection.top < 1200) {
          getSrcImage(container);
        }
      });
    } else {
      getSrcImage(container);
    }
  };

  if (!imageLazyContainers.length) {
    return;
  }

  for (let j = 0; j < imageLazyContainers.length; j++) {
    uploadImages(imageLazyContainers[j]);
  }
};

export {initLoadImg};
