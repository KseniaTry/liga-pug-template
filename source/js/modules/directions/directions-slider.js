import { addSwiperClass, removeSwiperClass } from '../../utils/swiper-class-switcher';
import { changeCardsColor, resetCardsColor } from './directions-color-change';

// инициализация свайпера происходит только при переключении на мобильную версию
const directionsSlider = document.querySelector('[data-class="directions-swiper"]');
const breakpoint = window.matchMedia('(max-width: 767px)');
const directionsSwiperWrapper = document.querySelector('[data-class="directions-swiper-wrapper"]');
const directionsSlides = document.querySelectorAll('[data-class="directions-slide"]');
const TABLET_MIN_WIDTH = 768;
let directionsSwiper;

const initDirectionsSwiper = () => {
  directionsSwiper = new Swiper(directionsSlider, {
    slideClass: 'directions__card',
    slidesPerView: 1.2,
    spaceBetween: 12,
    loop: true,
    loopedSlides: 1,
    navigation: {
      prevEl: '.directions__button--prev',
      nextEl: '.directions__button--next',
    },
  });
}

const breakpointChecker = () => {
  if (breakpoint.matches) {
    changeCardsColor();
    addSwiperClass(directionsSlider, directionsSwiperWrapper, directionsSlides);
    initDirectionsSwiper();
  } else {
    resetCardsColor();
    removeSwiperClass(directionsSlider, directionsSwiperWrapper, directionsSlides);
    directionsSwiper.destroy();
  }
};

const initDirectionsSlider = () => {
  breakpoint.addEventListener('change', breakpointChecker);

  if (window.innerWidth < TABLET_MIN_WIDTH) {
    changeCardsColor();
    addSwiperClass(directionsSlider, directionsSwiperWrapper, directionsSlides);
    initDirectionsSwiper();
  }
};

export { initDirectionsSlider }
