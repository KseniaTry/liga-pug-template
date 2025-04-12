const promoButtons = document.querySelectorAll('[data-class="promo-content-button"]');
const contentWrapper = document.querySelector('[data-class="promo-content-wrapper"]');

const resetDataset = () => {
  promoButtons.forEach((button) => {
    if (button.dataset.active === 'is-active') {
      button.dataset.active = 'not-active';
      const slide = contentWrapper.querySelector(`[data-id="${button.dataset.id}"]`);
      slide.dataset.slideActive = 'slide-not-active';
    }
  });
};

const switchItem = () => {
  promoButtons.forEach((button) => {
    button.addEventListener('click', () => {
      resetDataset();

      button.dataset.active = 'is-active';
      const slide = contentWrapper.querySelector(`[data-id="${button.dataset.id}"]`);
      slide.dataset.slideActive = 'slide-is-active';
    });
  });
};

const initPromoSwitcher = () => {
  switchItem();
};

export {initPromoSwitcher};
