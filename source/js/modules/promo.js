const promoButtons = document.querySelectorAll('.promo__content-button');
const contentWrapper = document.querySelector('[data-id="content-wrapper"]');

const switchItem = () => {
  promoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      promoButtons.forEach((button) => {
        if (button.dataset.active === 'is-active') {
          button.dataset.active = 'not-active';
          console.log(button);
          const slide = contentWrapper.querySelector(`[data-id="${button.dataset.id}"]`);
          slide.dataset.active = 'not-active';
          }
      });

      button.dataset.active = 'is-active';
      const slide = contentWrapper.querySelector(`[data-id="${button.dataset.id}"]`);
      slide.dataset.active = 'is-active';

      console.log(slide);
      console.log(button.dataset.id);
    })
  })
}


const initPromoSwitcher = () => {
  switchItem();
}

export { initPromoSwitcher }
