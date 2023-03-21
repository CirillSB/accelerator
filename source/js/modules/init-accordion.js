const accordionParent = document.querySelector('[data-accordion="parent"]');
const accordionButtons = document.querySelectorAll('[data-accordion="button"]');
const accordionContent = document.querySelectorAll('[data-accordion="content"]');
const accordionControlIcon = document.querySelectorAll('[data-accordion="icon"]');

const initAccordion = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    accordionContent.forEach((e) => {
      if (!e.classList.contains('hidden')) {
        e.classList.add('hidden');
      }
    });
    accordionControlIcon.forEach((e) => {
      if (e.classList.contains('accordion-pointer--minimized')) {
        e.classList.remove('accordion-pointer--minimized');
      }
    });
  }
};

const changeStateAccordion = () => {
  if (window.matchMedia('(max-width: 767px)').matches) {
    accordionParent.addEventListener('pointerdown', () => {
      for (let i = 0; i < accordionContent.length; i++) {
        if ((event.target === accordionButtons[i] || event.target === accordionControlIcon[i]) && !accordionContent[i].classList.contains('hidden')) {
          initAccordion();
        } else if ((event.target === accordionButtons[i] || event.target === accordionControlIcon[i]) && accordionContent[i].classList.contains('hidden')) {
          initAccordion();
          accordionContent[i].classList.remove('hidden');
          accordionControlIcon[i].classList.add('accordion-pointer--minimized');
        }
      }
    });
  }
};

export {
  initAccordion,
  changeStateAccordion
};
