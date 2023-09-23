/* Установка номера модального окна */
const podcastsNumbers = document.querySelectorAll('[data-podcast-number]');
const podcastModals = document.querySelectorAll('[data-podcast-content]');

for (let i = 0; i < podcastsNumbers.length; i++) {
  podcastModals[i].dataset.modal = podcastsNumbers[i].textContent;
  console.log(podcastsNumbers[i].textContent);
}

// скрипты музыки


let player = new Plyr('#player');

let playerName = document.querySelector('[data-player="name"]');
let playerPoster = document.querySelector('[data-player="poster"]');
let playerUrl = document.querySelector('[data-player="track-url"] source');
let playerNumber = document.querySelector('[data-player="number"]');
let playerTime = document.querySelector('[data-player="time"]');
let playerPlay = document.querySelector('[data-player="play"]');



const podcastOpenButton = document.querySelector('[data-open-podcasts]');
const tracks = [...document.querySelectorAll('[data-track="parent"]')];

// устанавливает номер трека
const updateModalTrack = () => {
  if (!tracks.length) {
    return;
  }

  for (let i = 0; i < tracks.length; i++) {
    let trackNumber = tracks[i].querySelector('[data-track="number"]');

    podcastOpenButton.dataset.openModal = trackNumber.textContent;
    playerPlay.classList.add('is-active');

  }
};

updateModalTrack();

let trackUrl;
let trackName;
let trackPoster;
let trackNumber;

for (let i = 0; i < tracks.length; i++) {
  tracks[i].addEventListener('click', (evt) => {
    evt.preventDefault();

    if (player.playing === true) {
      player.stop();

      console.log('pause');
    }

    player.play();

    if (!tracks[i].classList.contains('is-active')) {
      tracks[i].classList.add('is-active');
    } else {
      tracks[i].classList.remove('is-active');
      player.pause();
    }

    trackName = tracks[i].querySelector('[data-track="name"]').textContent;
    trackPoster = tracks[i].querySelector('[data-track="poster"]').src;
    trackNumber = tracks[i].querySelector('[data-track="number"]').textContent;
    trackUrl = tracks[i].href;

    console.log(trackName);
    console.log(trackPoster);
    console.log(trackNumber);
    console.log(trackUrl);


    playerName.textContent = trackName;
    playerPoster.src = trackPoster;
    playerNumber.textContent = trackNumber;
    playerUrl.src = trackUrl;



    player.source = {
      type: 'audio',
      sources: [{
        src: trackUrl,
        type: 'audio/mp3',
      }, ],
    };


  });
}


const buttonAbout = document.querySelector('[data-about]');
const aboutCloses = [...document.querySelectorAll('[data-about-close]')];

const contolAbout = () => {
  if (!buttonAbout) {
    return;
  }

  buttonAbout.addEventListener('click', () => {
    if (!buttonAbout.classList.contains('is-active')) {
      buttonAbout.classList.add('is-active');
    } else {
      buttonAbout.classList.remove('is-active');
    }
  });

  for (let i = 0; i < aboutCloses.length; i++) {
    aboutCloses[i].addEventListener('click', () => {
      if (!buttonAbout.classList.contains('is-active')) {
        buttonAbout.classList.add('is-active');
      } else {
        buttonAbout.classList.remove('is-active');
      }
    });
  }
};

contolAbout();


const podcastCloseButton = document.querySelector('[data-close-podcasts]');
const podcastOverlay = document.querySelector('[data-overlay-podcasts]');
const podcastModal = document.querySelector('[data-modal-podcasts]');
const podcastContents = document.querySelectorAll('[data-podcast-content]');

const initPodcasts = () => {
  if (!podcastContents.length) {
    return;
  }

  const openPodcasts = () => {
    podcastModal.classList.add('is-active');
    podcastOpenButton.classList.add('is-hidden');
    podcastCloseButton.classList.remove('is-hidden');
    buttonAbout.classList.remove('is-active');
  };

  const closePodcasts = () => {
    podcastModal.classList.remove('is-active');
    podcastCloseButton.classList.add('is-hidden');
    podcastOpenButton.classList.remove('is-hidden');
    buttonAbout.classList.remove('is-active');
    modals.close();
  };

  for (let i = 0; i < podcastContents.length; i++) {

    podcastOpenButton.addEventListener('click', () => {
      openPodcasts();
    });


    podcastCloseButton.addEventListener('click', () => {
      closePodcasts();
    });

    podcastOverlay.addEventListener('click', () => {
      closePodcasts();
    });
  }
};

initPodcasts();
