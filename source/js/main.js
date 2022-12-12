import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

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

// Slider
// const items = document.querySelectorAll('.slider__item');
// let slider = [];
// const rightButton = document.querySelector('.slider__next');
// const leftButton = document.querySelector('.slider__prev');

// for (let i = 0; i < items.length; i++) {
//   slider[i] = items[i];
//   console.log(slider[i]);
//   items[i].remove();
// }

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
