const form = document.querySelector('.feedback-form');

if (form) {
  new JustValidate('.feedback-form', {
    rules: {
      name: {
        required: true,
      },
      tel: {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      check: {
        required: true,
      },
    },
    messages: {
      name: {
        required: 'Пожалуйста, заполните поле',
      },
      tel: {
        required: 'Пожалуйста, заполните поле',
      },
      email: {
        required: 'Пожалуйста, заполните поле',
        email: 'Недопустимый формат',
      },
      check: {
        required: 'Пожалуйста, примите соглашение',
      },
    },
    colorWrong: '#ff6972'
  });
}
