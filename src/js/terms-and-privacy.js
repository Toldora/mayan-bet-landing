import handlebars from 'handlebars';
import { openModal } from '@/js/modal';
import template from '@/partials/terms.html?raw';

const markup = handlebars.compile(template)();

const termsBtnRef = document.querySelector('.js-terms-btn');
const policyBtnRef = document.querySelector('.js-privacy-policy-btn');
const modalContentRef = document.querySelector('.js-app-modal-content');

const onOpenModal = () => {
  modalContentRef.insertAdjacentHTML('beforeend', markup);

  openModal();
};

termsBtnRef.addEventListener('click', onOpenModal);
policyBtnRef.addEventListener('click', onOpenModal);
