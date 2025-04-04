import { DEFAULT_CARD_COLOR } from "../../const";

const directionsCards = document.querySelectorAll('[data-class="direction-card"]');

// изменение цвета карточек на mobile
const changeCardsColor = () => {
  directionsCards.forEach((card) => {
    const backgroundColor = card.dataset.color;
    card.style.backgroundColor = backgroundColor;
  });
}

// сброс цвета карточек (нужно для desktop)
const resetCardsColor = () => {
  directionsCards.forEach((card) => {
    card.style.backgroundColor = DEFAULT_CARD_COLOR;
  });
}

// добавление цветов карточкам на desktop
const addCardsHover = () => {
  directionsCards.forEach((card) => {
    card.addEventListener('mouseenter', function() {
      const cardColor = card.dataset.color;
      this.style.backgroundColor = cardColor;
    });

    card.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
  });
  })
}

export { changeCardsColor, resetCardsColor, addCardsHover }
