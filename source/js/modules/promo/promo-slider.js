import { addSwiperClass, removeSwiperClass } from "../../utils/swiper-class-switcher";

const promoSlider = document.querySelector('.promo__content');
const breakpoint = window.matchMedia('(max-width: 767px)');
const promoSwiperWrapper = document.querySelector('.promo__content-wrapper');
const promoSlides = document.querySelectorAll('.promo__slide');
const buttonNext = document.querySelector('.promo__button--next');
const buttonPrev = document.querySelector('.promo__button--prev');
const TABLET_MIN_WIDTH = 768;
let promoSwiper;

const initPromoSwiper = () => {
  promoSwiper = new Swiper(promoSlider, {
    slideClass: 'promo__slide',
    // slidesPerView: 1,
    loop: true,
    // autoHeight: true,
    allowTouchMove: true,
    navigation: {
      prevEl: '.promo__button--prev',
      nextEl: '.promo__button--next',
    },
    on: {
      init() {
        // var swiper = this;
        // buttonNext.addEventListener('click', () => {
        //   next();
        // })

        // buttonPrev.addEventListener('click', () => {
        //   prev();
        // })
      }
    }

    //     if (swiper.originalParams.loop && swiper.loopedSlides < swiper.originalParams.slidesPerView) {
    //     swiper.params.slidesPerView = swiper.loopedSlides;
    //     swiper.destroy(false, false);
    //     swiper.init();
    //     }
    // }
      // }
});
}





function next() {
  if (data[promoSwiper.realIndex + 1]) {
    promoSwiper.slideNext(500)
  } else {
    promoSwiper.slideToLoop(0)
  }
}

function prev() {
  if (data[promoSwiper.realIndex - 1]) {
    promoSwiper.slidePrev(500)
  } else {
    promoSwiper.slideToLoop(data.length - 1)
  }
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
