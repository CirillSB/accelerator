import {
  iosVhFix
} from './utils/ios-vh-fix';
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

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  testWebP();
  initAccordion();
  changeStateAccordion();
  setMaskTel();
  changeDescriptionVisibility();
  if (window.matchMedia('(min-width: 1024px)').matches) {
    initModalFeedback();
  }
});
