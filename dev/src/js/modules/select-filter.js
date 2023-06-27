const selectBtns = document.querySelectorAll('.filter-selects-form__select-button');

selectBtns.forEach(i => i.addEventListener('click', function (e) {
  e.preventDefault;
  const formBlock = this.parentNode;
  formBlock.classList.toggle('is-active');
  document.addEventListener('click', function (event) {
    if (!event.composedPath().includes(formBlock)) {
      formBlock.classList.remove('is-active');
    }
  });
}));



