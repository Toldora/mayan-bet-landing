const wheelRef = document.querySelector('.js-wheel');
// const wheelMainPartRef = wheelRef.querySelector('.js-wheel-main-part');

const state = {
  wheelsCount: 0,
  isSpinning: false,
};

const onClickWheel = () => {
  if (state.isSpinning) return;

  wheelRef.classList.add(
    state.wheelsCount ? 'wheel--spinning-2' : 'wheel--spinning-1',
  );

  state.isSpinning = true;
  state.wheelsCount += 1;

  setTimeout(() => {
    wheelRef.classList.remove('wheel--spinning-2', 'wheel--spinning-1');
    state.isSpinning = false;
  }, 4000);
};

wheelRef.addEventListener('click', onClickWheel);
