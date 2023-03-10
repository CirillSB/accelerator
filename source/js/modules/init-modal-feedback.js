const modal = document.querySelector('[data-modal="feedback"]');
const buttonOpenModal = document.querySelector('[data-open-modal]');
const page = document.querySelector('.wrapper');

const openModalFeedback = () => {
  modal.classList.add('is-active');
  page.classList.add('scroll-lock-ios');
};
const closeModalFeedback = () => {
  modal.classList.remove('is-active');
  page.classList.remove('scroll-lock-ios');
};

const initModalFeedback = () => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    buttonOpenModal.addEventListener('click', () => {
      openModalFeedback();
    });

    ['click', 'keydown'].forEach((i) => {
      const handler = () => {
        if (event.target.closest('.modal__overlay') || event.target.closest('[data-close-modal]') || event.keyCode === '27') {
          closeModalFeedback();
        }
      };

      modal.addEventListener(i, handler);
    });
  }
};


export {
  initModalFeedback
};
