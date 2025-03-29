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

const addNavigationButtons = (className, destinationBlockName) => {
  let buttonsWrapper = document.createElement('div');
  let buttonNext = document.createElement('button');
  let buttonPrev = document.createElement('button');

  buttonsWrapper.append(buttonNext);
  buttonsWrapper.append(buttonPrev);

  const destinationBlock = document.querySelector(destinationBlockName);
  destinationBlock.append(buttonsWrapper);

  console.log(buttonsWrapper);

//   <div class="tours__buttons-container arrow">
//   <button class="tours__button tours__button--prev arrow__button arrow__button--prev swiper-button-prev"
//     type="button" aria-label="Кнопка переключения предыдущего слайда"></button>
//   <button class="tours__button tours__button--next arrow__button arrow__button--next swiper-button-next"
//     type="button" aria-label="Кнопка переключения следующего слайда"></button>
// </div>
}

export { addSwiperClass, removeSwiperClass, addNavigationButtons }
