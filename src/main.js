import '@/styles/index.scss';

import '@/plugins';

import '@/js/global-state';
import '@/js/modal';
import '@/js/wheel';
import '@/js/sign-up';
import '@/js/sidebar';
import '@/js/terms-and-privacy';
import { openSignUpModal } from '@/js/sign-up';

import useViewportSizes from '@/js/use-viewport-sizes';

const signUpBtnRef = document.querySelector('.js-sign-up-btn');

useViewportSizes();

signUpBtnRef.addEventListener('click', openSignUpModal);
