// Swiper 7.4.1
import './vendor/swiper.js';
// import Swiper from './vendor/swiper.js';
// import './vendor/focus-visible-polyfill';

// const sliderCoaches = () => {
//   const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,

//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// };

// export {sliderCoaches};

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  allowTouchMove: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
});
