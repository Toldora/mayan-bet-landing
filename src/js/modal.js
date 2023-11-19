const appModalRef = document.querySelector('.js-app-modal');
const closeBtnRef = appModalRef.querySelector('.js-close-modal-btn');
const modalContentRef = document.querySelector('.js-app-modal-content');

const state = {
  isOpenedModal: false,
};

export const openModal = () => {
  appModalRef.classList.add('app-modal__overlay--animation');
  appModalRef.classList.remove('app-modal__overlay--hidden');

  appModalRef.addEventListener('click', onClickOverlay);
  closeBtnRef.addEventListener('click', closeModal);

  state.isOpenedModal = true;
};

const closeModal = event => {
  event.stopPropagation();

  appModalRef.classList.remove('app-modal__overlay--animation');
  appModalRef.classList.add('app-modal__overlay--hidden');

  appModalRef.removeEventListener('click', onClickOverlay);
  closeBtnRef.removeEventListener('click', closeModal);

  state.isOpenedModal = false;

  setTimeout(() => {
    modalContentRef.innerHTML = '';
  }, 100);
};

const onClickOverlay = event => {
  if (event.target !== event.currentTarget || !state.isOpenedModal) return;

  closeModal(event);
};
