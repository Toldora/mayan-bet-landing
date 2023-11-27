import { globalState } from '@/js/global-state';

const wheelRef = document.querySelector('.js-wheel');
const bonusesSectionRef = document.querySelector('.js-bonuses-section');
const bonusTriesRef = document.querySelector('.js-bonus-tries');
const bodyRef = document.body;
// const wheelMainPartRef = wheelRef.querySelector('.js-wheel-main-part');

const state = {
  isSpinning: false,
};

const onClickWheel = () => {
  if (state.isSpinning) return;

  state.isSpinning = true;

  globalState;

  switch (globalState.wheelStage) {
    case 1:
      wheelRef.classList.add('wheel--spinning-1');
      break;

    case 2:
      wheelRef.classList.add('wheel--spinning-2');
      break;

    default:
      break;
  }

  setTimeout(() => {
    switch (globalState.wheelStage) {
      case 1:
        bodyRef.classList.add('wheel-stage-2');
        bodyRef.classList.remove('wheel-stage-1');
        wheelRef.classList.remove('wheel--spinning-1');
        bonusesSectionRef.classList.add('bonuses-section--visible-first-bonus');
        bonusTriesRef.textContent = '1';

        break;

      case 2:
        bodyRef.classList.add('wheel-stage-3');
        bodyRef.classList.remove('wheel-stage-2');
        wheelRef.classList.remove('wheel--spinning-2');
        bonusesSectionRef.classList.add(
          'bonuses-section--visible-second-bonus',
        );
        bonusTriesRef.textContent = '0';

        break;

      default:
        break;
    }

    state.isSpinning = false;
    globalState.wheelStage += 1;
  }, 4000);
};

wheelRef.addEventListener('click', onClickWheel);
