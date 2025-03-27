const menuItems = document.querySelectorAll('[data-name="menu-item"]');
const breakpoint = window.matchMedia(`(min-width:1024px)`);
const menuButton = document.querySelector('[data-name="menu-button"]');
const menu = document.querySelector('[data-name="menu"]');
const header = document.querySelector('[data-name="header"]');

const closeMenu = () => {
  menuItems.forEach((item) => {
    if (item.classList.contains('is-open')) {
      item.classList.remove('is-open');
      const menuContent = item.querySelector('[data-name="menu-content-list"]');
      menuContent.classList.remove('is-open');
    }
  })
}

const openItem = (items) => {
  items.forEach((item) => {
    item.addEventListener(('click'), (evt) => {
      // evt.stopPropagation();
      closeMenu();
      const menuContent = item.querySelector('[data-name="menu-content-list"]');
      item.classList.toggle('is-open');
      menuContent.classList.toggle('is-open');
    })
  })
}

const openMenu = () => {
  if (breakpoint.matches) {
    openItem(menuItems);
  } else {
    menuButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      menuButton.classList.toggle('is-open');
      menu.classList.toggle('is-open');
      header.classList.toggle('is-open');
      openItem(menuItems);
    })
  }
}

const closeMenuOnPageClick = () => {
  document.body.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-name="menu"]') === null) {
      closeMenu();
    }
  });
};

const initMenu = () => {
  openMenu();
  closeMenuOnPageClick();
}

export { initMenu }

