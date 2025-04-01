// import Swiper, {SwiperOptions} from "swiper"
// import Swiper from 'swiper'
import { addSwiperClass, removeSwiperClass } from '../utils/swiper-class-switcher';
// import { Navigation } from 'swiper/modules/navigation/navigation';
// import 'swiper/swiper.min.css';

// инициализация свайпера происходит только при переключении на мобильную версию
const directionsSlider = document.querySelector('.directions__swiper');
const breakpoint = window.matchMedia('(max-width: 767px)');
const directionsSwiperWrapper = document.querySelector('.directions__swiper-wrapper');
const directionsSwiperContainer = document.querySelector('.directions__swiper');
const directionsSlides = document.querySelectorAll('.directions__card');
const directionsCards = document.querySelectorAll('.direction-card');
const TABLET_MIN_WIDTH = 768;
let directionsSwiper;
const DEFAULT_CARD_COLOR = '#ffffff';

const initDirectionsSwiper = () => {
  directionsSwiper = new Swiper(directionsSlider, {
    slideClass: 'directions__card',
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
    navigation: {
      prevEl: '.directions__button--prev',
      nextEl: '.directions__button--next',
    },
    on: {
      init() {
        var swiper = this;
        if (swiper.originalParams.loop && swiper.loopedSlides < swiper.originalParams.slidesPerView) {
        swiper.params.slidesPerView = swiper.loopedSlides;
        swiper.destroy(false, false);
        swiper.init();
        }
    }
      }
  });
}

const changeCardsColor = () => {
  directionsCards.forEach((card) => {
    const backgroundColor = card.dataset.color;
    card.style.backgroundColor = backgroundColor;
  })
}

const resetCardsColor = () => {
  directionsCards.forEach((card) => {
    card.style.backgroundColor = DEFAULT_CARD_COLOR;
  })
}

const breakpointChecker = () => {
  if (breakpoint.matches) {
    changeCardsColor();
    addSwiperClass(directionsSwiperContainer, directionsSwiperWrapper, directionsSlides);
    initDirectionsSwiper();
  } else {
    resetCardsColor();
    removeSwiperClass(directionsSwiperContainer, directionsSwiperWrapper, directionsSlides);
    directionsSwiper.destroy();
  }
};

const initDirectionsSlider = () => {
  breakpoint.addEventListener('change', breakpointChecker);

  if (window.innerWidth < TABLET_MIN_WIDTH) {
    changeCardsColor();
    addSwiperClass(directionsSwiperContainer, directionsSwiperWrapper, directionsSlides);
    initDirectionsSwiper();
  }
};

export { initDirectionsSlider }
