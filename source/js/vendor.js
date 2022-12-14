// Swiper 7.4.1
import './vendor/swiper.js';
// import './vendor/focus-visible-polyfill';

const coachesSlider = () => {
  const swiper = new Swiper('.slider', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    slidesPerGroup: 1,
    autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
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
};

const reviewCarousel = () => {
  const swiper = new Swiper('.carousel', {
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.carousel__next',
      prevEl: '.carousel__prev',
    },
  });
};

export {coachesSlider, reviewCarousel};
