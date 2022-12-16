import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
// import './vendor.js';
import {coachesSlider, reviewCarousel} from './vendor.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    // sliderCoaches();
    coachesSlider();
    reviewCarousel();
    findVideos();
  });
});

document.querySelectorAll('.nojs').forEach((item) => item.classList.remove('nojs'));

// Move to block

const anchors = document.querySelectorAll('a[href]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockId = anchor.getAttribute('href');
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// Tabs
const triggers = document.querySelectorAll('.tabs__item');
const tabsItems = document.querySelectorAll('.tabs__block');

triggers.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    let currentTrigger = item;
    let tabId = currentTrigger.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (!currentTrigger.classList.contains('tabs__item--active')) {
      triggers.forEach((child) => child.classList.remove('tabs__item--active'));
      tabsItems.forEach((child) => child.classList.remove('tabs__block--active'));

      currentTrigger.classList.add('tabs__item--active');
      currentTab.classList.add('tabs__block--active');
    }
  });
}

document.querySelector('.tabs__item').click();

// Video

function findVideos() {
  const videos = document.querySelectorAll('.video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let button = video.querySelector('.video__button');
  let id = parseMediaURL();

  video.addEventListener('click', () => {
    let iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
}

function parseMediaURL() {
  let regexp = /https:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11}).*/gi;
  let match = regexp.exec(document.querySelector('.video__link').href)[1];

  return match;
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

// Validate

const phoneInputs = document.querySelectorAll('input[data-tel]');

for (let i = 0; i < phoneInputs.length; i++) {
  let input = phoneInputs[i];
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^\d]/g, '');
  });
}

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
