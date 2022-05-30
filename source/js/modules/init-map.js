const mapWrapper = document.querySelector('[data-map]');
const breakpointSm = window.matchMedia('(max-width: 767px)');
let center = [55.39756706930534, 43.82468849999995];

const addMultitouch = (map) => {
  if (map) {
    if (breakpointSm.matches) {
      map.behaviors.disable('drag');
    } else {
      map.behaviors.enable('drag');
    }
  }
};

const initMap = () => {
  const map = document.querySelector('#map');

  if (!map) {
    return;
  }

  function init() {
    let map = new ymaps.Map('map', {
      center: center,
      zoom: 17,
    });

    addMultitouch(map);
    window.addEventListener('resize', ()=>{
      addMultitouch(map);
    });

    let placemark = new ymaps.Placemark(center, {
      balloonContent: `
        <div class="balloon">
          <p class="balloon__title">АМР "Артмедиа"</p>
          <div class="balloon__contacts">
            <p>г. Арзамас, ул. Карла Маркса, д. 61, офис №410</p>
            <a href="tel:+78314795464">+7 (83147) 9-54-64</a>
            <a href="mailto:info@art-md.ru">info@art-md.ru</a>
          </div>
        </div>
      `,
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/svg/icon-address.svg',
      iconImageSize: [50, 74],
      iconImageOffset: [-25, -75],
    });

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил

    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }

  ymaps.ready(init);
};

const addMap = () => {
  if (!mapWrapper) {
    return;
  }

  mapWrapper.addEventListener('click', () => {
    mapWrapper.classList.remove('is-hidden');
    initMap();
  });
};

export {addMap, initMap};
