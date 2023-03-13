export const changeDescriptionVisibility = () => {
  const appearingParagraph = document.querySelectorAll('[data-text-visibility-state]');
  const showingTextButton = document.querySelector('.about-company__button');

  const onlyMobileVisible = document.querySelector('[data-visible-except-mobile]');
  if (window.matchMedia('(max-width: 767px)').matches) {
    onlyMobileVisible.dataset.visibleExceptMobile = 'js-hidden';
  }

  const changeMobileTextVisibility = () => {
    if (onlyMobileVisible.dataset.visibleExceptMobile === 'js-hidden') {
      onlyMobileVisible.dataset.visibleExceptMobile = 'js-visible';
    } else if (onlyMobileVisible.dataset.visibleExceptMobile === 'js-visible') {
      onlyMobileVisible.dataset.visibleExceptMobile = 'js-hidden';
    }
  };

  const changeTextVisibility = () => {
    appearingParagraph.forEach((e) => {
      if (e.dataset.textVisibilityState === 'js-hidden') {
        e.dataset.textVisibilityState = 'js-visible';
      } else if (e.dataset.textVisibilityState === 'js-visible') {
        e.dataset.textVisibilityState = 'js-hidden';
      }
    });
    if (window.matchMedia('(max-width: 767px)').matches) {
      changeMobileTextVisibility();
    }
  };

  appearingParagraph.forEach((e) => {
    e.dataset.textVisibilityState = 'js-hidden';
  });

  showingTextButton.addEventListener('pointerdown', () => {
    changeTextVisibility();
  });
};
