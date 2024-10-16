import handlebars from 'handlebars';
import {
  // SignUpForm,
  compileSignUpFormMarkup,
} from 'mayanbet-sdk';
import signUpBonusesTemplate from '@/partials/sign-up-bonuses.hbs?raw';
import { openModal } from '@/js/modal';
// import { openLoginModal } from '@/js//login';
import { globalState } from '@/js/global-state';
// import { setToLS } from '@/js/local-storage';
// import { getIsUserOptedIn, getUserOnesignalId } from '@/js/one-signal';
// import { patchUser } from '@/api/one-signal';
// import { ONE_SIGNAL_TAG } from '@/const';

const modalContentRef = document.querySelector('.js-app-modal-content');

export const openSignUpModal = ({ isBlocked } = {}) => {
  const bonusesMarkup = handlebars.compile(signUpBonusesTemplate)({
    wheelStage: globalState.wheelStage,
  });

  const markup = compileSignUpFormMarkup({
    bonusesMarkup,
    title: globalState.wheelStage === 1 ? 'Junte-se a nós' : 'Parabéns',
    submitText:
      globalState.wheelStage === 1 ? 'Inscrever-se' : 'Receba seu bônus',
    isEmailOnFirstPosition: true,
  });

  modalContentRef.innerHTML = '';
  modalContentRef.insertAdjacentHTML('beforeend', markup);

  // new SignUpForm({
  //   formRef: document.forms.signUp,
  //   submitCallback: async () => {
  //     setToLS('isAlreadyRegistered', true);

  //     if (getIsUserOptedIn()) {
  //       const onesignalId = getUserOnesignalId();
  //       await patchUser(onesignalId, {
  //         tags: { [ONE_SIGNAL_TAG.registered]: '2' },
  //       });
  //     }
  //   },
  // });

  openModal({ isBlocked });
};
