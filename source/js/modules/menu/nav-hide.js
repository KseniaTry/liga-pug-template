import {DESKTOP_MIN_WIDTH} from '../../const';
import {SHOWN_NAV_ITEM_ID} from '../../const';

const navItems = document.querySelectorAll('[data-class="nav-item"]');
const breakpoint = window.matchMedia(`(max-width: ${DESKTOP_MIN_WIDTH - 1}px)`);

const hideItems = () => {
  navItems.forEach((item) => {
    if (item.dataset.id !== SHOWN_NAV_ITEM_ID) {
      item.style.display = 'none';
    }
  });
};

const showItems = () => {
  navItems.forEach((item) => {
    item.style.display = 'block';
  });
};

const breakpointChecker = () => {
  if (breakpoint.matches) {
    hideItems();
  } else {
    showItems();
  }
};

const hideMobileNavItems = () => {
  breakpoint.addEventListener('change', breakpointChecker);

  if (window.innerWidth < DESKTOP_MIN_WIDTH) {
    hideItems();
  }
};

export {hideMobileNavItems};
