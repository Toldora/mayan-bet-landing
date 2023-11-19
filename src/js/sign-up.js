import handlebars from 'handlebars';
import { openModal } from '@/js/modal';
import template from '@/partials/sign-up-modal.html?raw';

const markup = handlebars.compile(template)();

const signUpBtnRef = document.querySelector('.js-sign-up-btn');
const modalContentRef = document.querySelector('.js-app-modal-content');

const state = {
  isValid: false,
  isSubmitLoading: false,
};

const validate = () => {
  const { email, submitBtn, agreeCheck } = formRef;
  if (!email || !agreeCheck || !submitBtn) return;

  const isValid = email.validity.valid && agreeCheck.checked;

  state.isValid = isValid;

  if (isValid) {
    submitBtn.classList.remove('sign-up__submit-btn--disabled');
  } else {
    submitBtn.classList.add('sign-up__submit-btn--disabled');
  }
};

const onInput = () => {
  validate();
};

const onChangeCheckbox = () => {
  validate();
};

const onSubmit = async event => {
  event.preventDefault();

  try {
    if (!state.isValid || state.isSubmitLoading) return;

    state.isSubmitLoading = true;
    formRef.fieldset.disabled = true;
    formRef.submitBtn.textContent = 'Carregando...';

    formRef.style.minHeight = `${formRef.clientHeight}px`;

    const body = JSON.stringify({});

    // const response = await fetch(
    //   'https://idyllic-eclair-f22d90.netlify.app/api/sign-up',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body,
    //   },
    // );
    // const data = await response.json();
    // if (response.ok) {
    //   formRef.innerHTML = `<h2 class="sign-up__title">Junte-se a nós</h2>
    //   <div>Sucesso! Entraremos em contato em breve.</div>`;
    // } else {
    //   const errorRef = formRef.querySelector('.js-email-error');
    //   errorRef.textContent = data.messagePt || data.message;
    //   errorRef.classList.add('sign-up__email-error--visible');
    // }
  } catch (error) {
    formRef.innerHTML = JSON.stringify(error, null, 2);
  } finally {
    state.isSubmitLoading = false;
    if (formRef.fieldset) {
      formRef.fieldset.disabled = false;
    }
    if (formRef.submitBtn) {
      formRef.submitBtn.textContent = 'Inscrever-se';
    }
  }
};

const onOpenModal = () => {
  modalContentRef.insertAdjacentHTML('beforeend', markup);

  //   const formRef = document.forms.signUp;

  //   formRef.email.addEventListener('input', onInput);
  //   formRef.agreeCheck.addEventListener('change', onChangeCheckbox);
  //   formRef.addEventListener('submit', onSubmit);

  openModal();
};

signUpBtnRef.addEventListener('click', onOpenModal);
