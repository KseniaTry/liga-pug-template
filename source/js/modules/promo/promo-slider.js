import {addSwiperClass, removeSwiperClass} from '../../utils/swiper-class-switcher';
import {TABLET_MIN_WIDTH} from '../../const';

const promoSlider = document.querySelector('[data-class="promo-content"]');
const breakpoint = window.matchMedia(`(max-width: ${TABLET_MIN_WIDTH - 1}px)`);
const promoSwiperWrapper = document.querySelector('[data-class="promo-content-wrapper"]');
const promoSlides = document.querySelectorAll('[data-class="promo-slide"]');
let promoSwiper;

const initPromoSwiper = () => {
  promoSwiper = new Swiper(promoSlider, {
    slideClass: 'promo__slide',
    slidesPerView: 1,
    loop: true,
    loopedSlides: 1,
    navigation: {
      prevEl: '.promo__button--prev',
      nextEl: '.promo__button--next',
    },
  });
};

const breakpointChecker = () => {
  if (breakpoint.matches) {
    addSwiperClass(promoSlider, promoSwiperWrapper, promoSlides);
    initPromoSwiper();
  } else {
    removeSwiperClass(promoSlider, promoSwiperWrapper, promoSlides);
    promoSwiper.destroy();
  }
};

const initPromoSlider = () => {
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  if (window.innerWidth < TABLET_MIN_WIDTH) {
    addSwiperClass(promoSlider, promoSwiperWrapper, promoSlides);
    initPromoSwiper();
  }
};

export {initPromoSlider};
