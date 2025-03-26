const menuItems = document.querySelectorAll('#menu-item');

const closeMenu = () => {
  menuItems.forEach((item) => {
    if (item.classList.contains('is-open')) {
      item.classList.remove('is-open');
      const menuContent = item.querySelector('#menu-content-list');
      menuContent.classList.remove('is-open');
    }
  })
}

const openMenu = () => {
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
      const menuContent = item.querySelector('#menu-content-list');
      item.classList.toggle('is-open');
      menuContent.classList.toggle('is-open');
    })
  })
}

const closeMenuOnPageClick = () => {
  document.body.addEventListener('click', (evt) => {
    if (evt.target.closest('.header__menu') === null) {
      closeMenu();
    }
  });
};

const initMenu = () => {
  openMenu();
  closeMenuOnPageClick();
}

export { initMenu }

