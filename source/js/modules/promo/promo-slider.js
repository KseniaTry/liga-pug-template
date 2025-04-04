import { addSwiperClass, removeSwiperClass } from "../../utils/swiper-class-switcher";

const promoSlider = document.querySelector('.promo__content');
const breakpoint = window.matchMedia('(max-width: 767px)');
const promoSwiperWrapper = document.querySelector('.promo__content-wrapper');
const promoSlides = document.querySelectorAll('.promo__slide');
const TABLET_MIN_WIDTH = 768;
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
}

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
  breakpoint.addEventListener('change', breakpointChecker);

  if (window.innerWidth < TABLET_MIN_WIDTH) {
    addSwiperClass(promoSlider, promoSwiperWrapper, promoSlides);
    initPromoSwiper();
  }
};

export { initPromoSlider }
