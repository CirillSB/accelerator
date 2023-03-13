export const initModalFeedback = () => {
  const buttonOpenModal = document.querySelector('[data-open-modal]');
  const buttonCloseModal = document.querySelectorAll('[data-close-modal]');
  const modal = document.querySelector('[data-modal="feedback"]');
  const nameInput = document.querySelector('#popup-name');

  const showModal = () => {
    modal.classList.add('is-active');
    nameInput.focus();
    buttonOpenModal.removeEventListener('click', showModal);
    modal.addEventListener('click', hideModalClick);
    document.addEventListener('keydown', hideModalKeyDown);
  };

  const closeModal = () => {
    modal.classList.remove('is-active');
    buttonOpenModal.addEventListener('click', showModal);
    modal.removeEventListener('click', hideModalClick);
    document.removeEventListener('keydown', hideModalKeyDown);
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
};
