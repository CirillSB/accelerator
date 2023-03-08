export const showMenu = () => {

  const title = document.querySelectorAll('.main-footer__title');
  const footer = document.querySelector('.main-footer');
  const resizingBlocks = document.querySelectorAll('[data-resizing-block]');
  const changingPointers = document.querySelectorAll('[data-changing-pointer]');

  if (window.matchMedia('(max-width: 767px)').matches) {
    footer.addEventListener('pointerdown', () => {
      for (let i = 0; i < resizingBlocks.length; i++) {
        if (event.target === title[i] || event.target === changingPointers[i]) {
          if (resizingBlocks[i].querySelector('[data-hiding-block]').dataset.hidingBlock === 'js-hidden') {
            resizingBlocks[i].querySelector('[data-hiding-block]').dataset.hidingBlock = 'js-visible';
            changingPointers[i].dataset.changingPointer = 'js-open';
          } else if (resizingBlocks[i].querySelector('[data-hiding-block]').dataset.hidingBlock === 'js-visible') {
            resizingBlocks[i].querySelector('[data-hiding-block]').dataset.hidingBlock = 'js-hidden';
            changingPointers[i].dataset.changingPointer = 'js-closed';
          }
        }
      }
    });
  } else {
    for (let i = 0; i < resizingBlocks.length; i++) {
      resizingBlocks[i].querySelector('[data-hiding-block]').dataset.hidingBlock = 'js-visible';
    }
  }
};
