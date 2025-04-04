import { DESKTOP_MIN_WIDTH } from "../../const";

const menuItems = document.querySelectorAll('[data-name="menu-item"]');
const breakpoint = window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);
const menuButton = document.querySelector('[data-name="menu-button"]');
const menu = document.querySelector('[data-name="menu"]');
const header = document.querySelector('[data-name="header"]');

const isEscapeKey = (evt) => evt.key === 'Escape'; // функция, которая возвращает true / false в зависимости от наличия или отсутствия нажатия клавиши esc

const closeMenu = () => {
  menuItems.forEach((item) => {
    if (item.classList.contains('is-open')) {
      item.classList.remove('is-open');
      const menuContent = item.querySelector('[data-name="menu-content-list"]');
      menuContent.classList.remove('is-open');
    }
  })
}

function onDocumentEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
}

const openItem = () => {
  menuItems.forEach((item) => {
    // закрытие текущего пункта при клике на другой пункт
    item.addEventListener(('click'), () => {
      if (!item.classList.contains('is-open')) {
        closeMenu();
      }

      // закрытие и открытие пункта при клике на него
      const menuContent = item.querySelector('[data-name="menu-content-list"]');
      item.classList.toggle('is-open');
      menuContent.classList.toggle('is-open');
    })
  })
}

const openItemByHover = () => {
  menuItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
      // if (!item.classList.contains('is-open')) {
      //   closeMenu();
      // }
      // закрытие и открытие пункта при клике на него
      const menuContent = item.querySelector('[data-name="menu-content-list"]');
      item.classList.toggle('is-open');
      menuContent.classList.toggle('is-open');
    })

    item.addEventListener('mouseout', (evt) => {
      evt.preventDefault();
      if (!item.classList.contains('click')) {
        closeMenu();
      }
    });
  });
  };

  const openMenu = () => {
    document.addEventListener('keydown', onDocumentEscKeyDown);

    if (breakpoint.matches) {
      openItem();
      openItemByHover();
    } else {
      menuButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        menuButton.classList.toggle('is-open');
        menu.classList.toggle('is-open');
        header.classList.toggle('is-open');
        openItem();
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

