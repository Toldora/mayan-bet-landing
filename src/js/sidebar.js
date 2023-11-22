const burgerBtnRef = document.querySelector('.js-burger-btn');
const sidebarRef = document.querySelector('.js-app-sidebar');

const state = {
  isOpenedSidebar: false,
};

const onClickBurgerBtn = () => {
  state.isOpenedSidebar = !state.isOpenedSidebar;
  sidebarRef.classList.toggle('app-sidebar--is-visible');
};

burgerBtnRef.addEventListener('click', onClickBurgerBtn);
