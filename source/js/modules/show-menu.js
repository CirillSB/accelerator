export const showMenu = () => {
  const footer = document.querySelector('[data-footer]');
  const menuButtons = document.querySelectorAll('[data-resizing-block-button]');
  const accordionsList = document.querySelectorAll('[data-hiding-block]');
  const controlIcon = document.querySelectorAll('[data-changing-pointer]');
  const collapseMenu = () => {
    accordionsList.forEach((el) => {
      el.dataset.hidingBlock = 'js-hidden';
    });
    controlIcon.forEach((el) => {
      el.dataset.changingPointer = 'js-closed';
    });
  };

  if (window.matchMedia('(max-width: 767px)').matches) {
    accordionsList.forEach((el) => {
      el.classList.remove('visible-except-mobile');
    });
    collapseMenu();
    footer.addEventListener('pointerdown', () => {
      for (let i = 0; i < menuButtons.length; i++) {
        if (event.target === menuButtons[i] && accordionsList[i].dataset.hidingBlock === 'js-visible') {
          collapseMenu();
        } else if (event.target === menuButtons[i] && accordionsList[i].dataset.hidingBlock === 'js-hidden') {
          collapseMenu();
          accordionsList[i].dataset.hidingBlock = 'js-visible';
          controlIcon[i].dataset.changingPointer = 'js-open';
        }
      }
    });
  }
};
