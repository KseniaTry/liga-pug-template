// import Swiper, {SwiperOptions} from "swiper"
import Swiper from 'swiper'
import { addSwiperClass, removeSwiperClass, addNavigationButtons } from '../../utils/swiper-class-switcher';
// import { Navigation } from 'swiper/modules/navigation/navigation';
// import 'swiper/swiper.min.css';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

// инициализация свайпера происходит только при переключении на мобильную версию
const directionsSlider = document.querySelector('.directions__swiper');
const breakpoint = window.matchMedia('(max-width: 767px)');
const directionsSwiperWrapper = document.querySelector('.directions__swiper-wrapper');
const directionsSwiperContainer = document.querySelector('.directions__swiper');
const directionsSlides = document.querySelectorAll('.directions__card');
const TABLET_MIN_WIDTH = 768;
let directionsSwiper;

const initDirectionsSwiper = () => {
  directionsSwiper = new Swiper(directionsSlider, {
    slideClass: 'directions__card',
    modules: [Navigation],
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
    navigation: {
      prevEl: '.reviews__button--prev',
      nextEl: '.reviews__button--next',
      clickable: true,
    },
    breakpoints: {
      1440: {
        allowTouchMove: false,
        pagination: {
          clickable: true,
        }
      },
    }
  });
}

const breakpointChecker = () => {
  if (breakpoint.matches) {
    addSwiperClass(directionsSwiperContainer, directionsSwiperWrapper, directionsSlides);
    initDirectionsSwiper();
    addNavigationButtons('directions', 'swiper');
  } else {
    removeSwiperClass(directionsSwiperContainer, directionsSwiperWrapper, directionsSlides);
    directionsSwiper.destroy();
  }
};

const initDirectionsSlider = () => {
  breakpoint.addEventListener('change', breakpointChecker);

  if (window.innerWidth < TABLET_MIN_WIDTH) {
    addSwiperClass(directionsSwiperContainer, directionsSwiperWrapper, directionsSlides);
    initDirectionsSwiper();
    addNavigationButtons('directions', 'swiper');
  }
};

export { initDirectionsSlider }
