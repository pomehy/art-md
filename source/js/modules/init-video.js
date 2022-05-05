import '../vendor/iphone-inline-video';

const initVideo = () => {
  window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
      const videos = document.querySelectorAll('video');
      videos.forEach((video) => window.enableInlineVideo(video));
    });
  });
};

export {initVideo};
