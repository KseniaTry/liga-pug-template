const platformRates = document.querySelectorAll('[data-class="platform-rate"]');

const addPlatformRateColors = () => {
  platformRates.forEach((platform) => {
    const platformRate = platform.dataset.rate;
    const platformAccentColor = platform.dataset.accent;
    const platformColor = platform.dataset.color;
    platform.style.backgroundImage = `linear-gradient(to right, ${platformAccentColor} ${platformRate}, ${platformColor} ${platformRate})`;
  });
};

export { addPlatformRateColors };
