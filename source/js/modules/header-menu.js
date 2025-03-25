const headerMenuItems = document.querySelectorAll('.header__accordion-item');

const closeMenu = () => {
  headerMenuItems.forEach((item) => {
    if (item.classList.contains('header__accordion-item--opened')) {
      item.classList.remove('header__accordion-item--opened');
      const headerAccordionContent = item.querySelector('.header__accordion-content-list');
      headerAccordionContent.classList.remove('header__accordion-content-list--opened');
    }
  })
}

const openMenu = () => {
  headerMenuItems.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
      const headerAccordionContent = item.querySelector('.header__accordion-content-list');
      item.classList.toggle('header__accordion-item--opened');
      headerAccordionContent.classList.toggle('header__accordion-content-list--opened');
    })
  })
}

const closeMenuOnPageClick = () => {
  document.body.addEventListener('click', (evt) => {
    if (evt.target.closest('.header__accordion') === null) {
      closeMenu();
    }
  });
};

const initMenu = () => {
  openMenu();
  closeMenuOnPageClick();
}

export { initMenu }

