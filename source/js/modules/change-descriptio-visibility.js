export const changeDescriptionVisibility = () => {

  const showingTextButton = document.querySelector('.about-company__button');

  const textSnippet = document.querySelector('[data-text-snippet]');

  if (window.matchMedia('(max-width: 767px)').matches) {
    textSnippet.dataset.textVisibilityState = 'js-hidden';
  }
  const appearingParagraph = document.querySelectorAll('[data-text-visibility-state]');

  appearingParagraph.forEach((e) => {
    e.dataset.textVisibilityState = 'js-hidden';
  });

  const changeTextVisibility = () => {
    appearingParagraph.forEach((e) => {
      if (e.dataset.textVisibilityState === 'js-hidden') {
        e.dataset.textVisibilityState = 'js-visible';
      } else if (e.dataset.textVisibilityState === 'js-visible') {
        e.dataset.textVisibilityState = 'js-hidden';
      }
    });
  };

  showingTextButton.addEventListener('pointerdown', () => {
    changeTextVisibility();
  });
};
