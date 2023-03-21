import {
  iosVhFix
} from './utils/ios-vh-fix';
import {
  initModals
} from './modules/modals/init-modals';
import {
  Form
} from './modules/form-validate/form';
import {
  changeStateAccordion,
  initAccordion
} from './modules/init-accordion';
import {
  initModalFeedback
} from './modules/init-modal-feedback';
import {
  changeDescriptionVisibility
} from './modules/change-descriptio-visibility';
import {
  setMaskTel
} from './modules/set-mask-tel';
import {
  testWebP
} from './modules/test-webp';
import {
  applyFocusVisiblePolyfill
} from './vendor/focus-visible-polyfill';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  testWebP();
  initAccordion();
  changeStateAccordion();
  setMaskTel();
  changeDescriptionVisibility();
  if (window.matchMedia('(min-width: 1024px)').matches) {
    initModalFeedback();
    applyFocusVisiblePolyfill();
  }

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
