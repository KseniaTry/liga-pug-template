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

export {addSwiperClass, removeSwiperClass};
