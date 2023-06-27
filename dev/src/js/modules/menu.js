const burgerHeader = document.querySelector('.header-burger');
const menuHeader = document.querySelector('.menu-dropdown');
const menuLink = document.querySelectorAll('.header-menu__link');

burgerHeader.addEventListener('click', function () {
  menuHeader.classList.toggle('is-active');
  burgerHeader.classList.toggle('is-active');
});