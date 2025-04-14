import {addSwiperClass, removeSwiperClass} from '../../utils/swiper-class-switcher';
import {changeCardsColor, resetCardsColor} from './directions-color-change';
import {TABLET_MIN_WIDTH} from '../../const';

// инициализация свайпера происходит только при переключении на мобильную версию
const directionsSlider = document.querySelector('[data-class="directions-swiper"]');
const breakpoint = window.matchMedia(`(max-width: ${TABLET_MIN_WIDTH - 1}px)`);
const directionsSwiperWrapper = document.querySelector('[data-class="directions-swiper-wrapper"]');
const directionsSlides = document.querySelectorAll('[data-class="directions-slide"]');
let directionsSwiper;

const initDirectionsSwiper = () => {
  directionsSwiper = new Swiper(directionsSlider, {
    slideClass: 'directions__card',
    slidesPerView: 'auto',
    spaceBetween: 8,
    loop: true,
    loopedSlides: 1,
    navigation: {
      prevEl: '.directions__button--prev',
      nextEl: '.directions__button--next',
    },
  });
};

const breakpointChecker = () => {
  console.log(breakpoint.matches);

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

  // if (window.innerWidth < TABLET_MIN_WIDTH) {
  //   changeCardsColor();
  //   addSwiperClass(directionsSlider, directionsSwiperWrapper, directionsSlides);
  //   initDirectionsSwiper();
  // }
};

export {initDirectionsSlider};
