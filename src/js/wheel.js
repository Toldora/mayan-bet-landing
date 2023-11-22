const wheelRef = document.querySelector('.js-wheel');
const bonusesSectionRef = document.querySelector('.js-bonuses-section');
const bonusTriesRef = document.querySelector('.js-bonus-tries');
// const wheelMainPartRef = wheelRef.querySelector('.js-wheel-main-part');

const state = {
  stage: 1,
  isSpinning: false,
};

const onClickWheel = () => {
  if (state.isSpinning) return;

  state.isSpinning = true;

  switch (state.stage) {
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
    switch (state.stage) {
      case 1:
        wheelRef.classList.add('wheel--stage-2');
        wheelRef.classList.remove('wheel--stage-1');
        wheelRef.classList.remove('wheel--spinning-1');
        bonusesSectionRef.classList.add('bonuses-section--visible');

        break;

      case 2:
        wheelRef.classList.add('wheel--stage-3');
        wheelRef.classList.remove('wheel--stage-2');
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
    state.stage += 1;
  }, 4000);
};

wheelRef.addEventListener('click', onClickWheel);
