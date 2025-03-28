import Swiper, {SwiperOptions} from "swiper"
// import Swiper from 'swiper'
// import { Navigation } from 'swiper/modules/navigation/navigation';
// import 'swiper/swiper.min.css';
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js';

// GALLERY блок. свайпер. инициализация свайпера происходит только при переключении на десктопную версию
const gallerySlider = document.querySelector('.gallery__swiper');
const galleryBreakpoint = window.matchMedia('(max-width: 1439px)');
const gallerySwiperWrapper = document.querySelector('.gallery__swiper-wrapper');
const gallerySwiperContainer = document.querySelector('.gallery__swiper');
const gallerySlides = document.querySelectorAll('.gallery__slide');
const DESKTOP_MIN_WIDTH = 1440;
let gallerySwiper;

const addSwiperClass = (swiperClass, swiperWrapperClass, swiperSlideClass) => {
  swiperClass.classList.add('swiper');
  swiperWrapperClass.classList.add('swiper-wrapper');

  swiperSlideClass.forEach((slide) => {
    slide.classList.add('swiper-slide');
  });
};

const removeSwiperClass = (swiperClass, swiperWrapperClass, swiperSlideClass) => {
  swiperClass.classList.remove('swiper');
  swiperWrapperClass.classList.remove('swiper-wrapper');

  swiperSlideClass.forEach((slide) => {
    slide.classList.remove('swiper-slide');
  });
};


const breakpointChecker = () => {
  if (galleryBreakpoint.matches) {
    addSwiperClass(gallerySwiperContainer, gallerySwiperWrapper, gallerySlides);
    initGallerySwiper();
  } else {
    removeSwiperClass(gallerySwiperContainer, gallerySwiperWrapper, gallerySlides);
    gallerySwiper.destroy();
  }
};

const initGallerySlider = () => {
  galleryBreakpoint.addEventListener('change', galleryBreakpointChecker);

  if (window.innerWidth < DESKTOP_MIN_WIDTH) {
    addSwiperClass(gallerySwiperContainer, gallerySwiperWrapper, gallerySlides);
    initGallerySwiper();
  }
};


const directionsSlider = document.querySelector('.directions__swiper');

const directionsSwiper = new Swiper(directionsSlider, {
  slideClass: 'directions__slide',
  modules: [Navigation],
  slidesPerView: 'auto',
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

const initDirectionsSlider = () => {
  directionsSwiper.init();
}

export { initDirectionsSlider }
