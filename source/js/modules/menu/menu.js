import { DESKTOP_MIN_WIDTH } from '../../const';

const menuItems = document.querySelectorAll('[data-name="menu-item"]');
const breakpoint = window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`);
const menuButton = document.querySelector('[data-name="menu-button"]');
const menu = document.querySelector('[data-name="menu"]');
const header = document.querySelector('[data-name="header"]');
const pageBody = document.body;

const isEscapeKey = (evt) => evt.key === 'Escape';

// закрытие пункта в зависимости от класса (в зависимости от того открытие было либо по hover либо по клику)
const closeItem = (className) => {
  menuItems.forEach((item) => {
    const menuContent = item.querySelector('[data-name="menu-content-list"]');

    if (item.classList.contains(className)) {
      item.classList.remove(className);
      menuContent.classList.remove(className);
      pageBody.classList.remove('scroll-lock');
    }
  });
};

function onDocumentEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeItem('is-open');
  }
}

const openItemBreakpointChecker = () => {
  if (breakpoint.matches) {
    // удаление класса открытия по hover если был клик по пункту меню
    menuItems.forEach((item) => {
      item.addEventListener(('click'), () => {
        const menuContent = item.querySelector('[data-name="menu-content-list"]');

        if (item.classList.contains('is-open-by-hover')) {
          item.classList.remove('is-open-by-hover');
          menuContent.classList.remove('is-open-by-hover');
          pageBody.classList.remove('scroll-lock');
        }
        // закрытие и открытие пункта при клике на него
        item.classList.toggle('is-open');
        menuContent.classList.toggle('is-open');
        pageBody.classList.toggle('scroll-lock');
        // удаление слушателей события hover
        item.removeEventListener('mouseover', null);
        item.removeEventListener('mouseout', null);
      });
    });
  } else {
    // закрытие и открытие пункта при клике на него
    menuItems.forEach((item) => {
      item.addEventListener(('click'), () => {
        const menuContent = item.querySelector('[data-name="menu-content-list"]');
        item.classList.toggle('is-open');
        menuContent.classList.toggle('is-open');
        pageBody.classList.add('scroll-lock');
      });
    })
  }
};

const openItem = () => {
  breakpoint.addListener(openItemBreakpointChecker);
  openItemBreakpointChecker();
}

// открытие меню по hover
const openItemByHover = () => {
  menuItems.forEach((item) => {
    if (!item.classList.contains('is-open')) {
      item.addEventListener('mouseover', () => {

        // закрытие пункта меню, открытого по клику, если далее было наведение на другой пункт меню
        menuItems.forEach((menuItem) => {
          const currentItem = item;
          const menuContent = menuItem.querySelector('[data-name="menu-content-list"]');
          if (menuItem === currentItem) {
            return;
          } else {
            menuItem.classList.remove('is-open');
            menuContent.classList.remove('is-open');
            pageBody.classList.remove('scroll-lock');
          }
        });

        // закрытие и открытие пункта при hover
        const menuContent = item.querySelector('[data-name="menu-content-list"]');
        item.classList.toggle('is-open-by-hover');
        menuContent.classList.toggle('is-open-by-hover');
        pageBody.classList.toggle('scroll-lock');
      });

      item.addEventListener('mouseout', (evt) => {
        if (item.classList.contains('is-open')) {
          evt.preventDefault();
        } else {
          closeItem('is-open-by-hover');
        }
      });
    }
  });
};

const breakpointChecker = () => {
  if (breakpoint.matches) {
    openItem();
    openItemByHover();
  } else {
    menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('is-open');
      menu.classList.toggle('is-open');
      header.classList.toggle('is-open');
      pageBody.classList.toggle('scroll-lock');
      openItem();
    });
  }
}

const closeItemOnPageClick = () => {
  document.body.addEventListener('click', (evt) => {
    if (evt.target.closest('[data-name="menu"]') === null) {
      closeItem('is-open');
      closeItem('is-open-by-hover');
    }
  });
};

const initMenu = () => {
  document.addEventListener('keydown', onDocumentEscKeyDown);
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
  closeItemOnPageClick();
};

export { initMenu };

