export const initModalFeedback = () => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    const body = document.querySelector('body');
    const page = document.querySelector('.wrapper');
    const buttonOpenModal = document.querySelector('[data-open-modal]');
    const buttonCloseModal = document.querySelectorAll('[data-close-modal]');
    const modal = document.querySelector('[data-modal="feedback"]');
    const nameInput = document.querySelector('#popup-name');
    const focusableElements = document.querySelectorAll('[data-focusable-element]');
    const firstFocusableElement = focusableElements[1];
    const lastFocusableElement = focusableElements[0];
    const KEYCODE_TAB = 9;

    const createFocusNoose = () => {
      modal.addEventListener('keydown', (e) => {
        const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) /* shift + tab */ {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else /* tab */ {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      });
    };

    const showModal = () => {
      modal.classList.add('is-active');
      buttonOpenModal.removeEventListener('click', showModal);
      modal.addEventListener('click', hideModalClick);
      document.addEventListener('keydown', hideModalKeyDown);
      nameInput.focus();
      body.style.overflowY = 'hidden';
      page.inert = true;
      createFocusNoose();
    };

    const closeModal = () => {
      modal.classList.remove('is-active');
      buttonOpenModal.addEventListener('click', showModal);
      modal.removeEventListener('click', hideModalClick);
      document.removeEventListener('keydown', hideModalKeyDown);
      body.style.overflowY = 'visible';
      page.inert = false;
    };

    const hideModalClick = () => {
      for (let i = 0; i < buttonCloseModal.length; i++) {
        if (event.target === buttonCloseModal[i]) {
          closeModal();
        }
      }
    };

    const hideModalKeyDown = (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };

    buttonOpenModal.addEventListener('click', showModal);


  }
};
