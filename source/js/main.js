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

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  initAccordion();
  changeStateAccordion();
  setMaskTel();
  initModalFeedback();
  changeDescriptionVisibility();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
