const popupContainerBuy = document.querySelector('#popup-container-buy');
const popupContainerFeedback = document.querySelector('#popup-container-feedback');
const popupContainerPreview = document.querySelector('#popup-container-preview');

const popupBuyClose = document.querySelector('.popup-buy-close');
const popupFeedbackClose = document.querySelector('.popup-feedback-close');
const popupReviewClose = document.querySelector('.popup-review-close');

const priductButton = document.querySelector('.product__button');
const productPicture = document.querySelector('.product-pict__swiper');

if (priductButton) {
  priductButton.addEventListener('click', function () {
    popupContainerBuy.classList.add('popup-active');
  });
}
if (popupBuyClose) {
  popupBuyClose.addEventListener('click', function () {
    popupContainerBuy.classList.remove('popup-active');
  });
}
if (popupContainerBuy) {
  popupContainerBuy.addEventListener('click', function (event) {
    if (event.target == popupContainerBuy) {
      popupContainerBuy.classList.remove('popup-active');
    }
  });
}

if (popupContainerFeedback) {
  popupContainerFeedback.addEventListener('click', function (event) {
    if (event.target == popupContainerFeedback) {
      popupContainerFeedback.classList.remove('popup-active');
    }
  });
}
if (popupFeedbackClose) {
  popupFeedbackClose.addEventListener('click', function () {
    popupContainerFeedback.classList.remove('popup-active');
  });
}

if (productPicture) {
  productPicture.addEventListener('click', function () {
    popupContainerPreview.classList.add('popup-active');
    $('.popup-preview__product-pict-nav').slick({
      arrows: false,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      easing: 'ease',
      touchThreshold: 20,
      infinite: false,
      responsive: [
        {
          breakpoint: 1152,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 769,
          settings: {
            arrows: true,
            slidesToShow: 2,
            draggable: false,
            swipe: false,
            touchMove: false,
          }
        },
        {
          breakpoint: 542,
          settings: {
            arrows: true,
            slidesToShow: 1,
            draggable: false,
            swipe: false,
            touchMove: false,
          }
        },
      ]
    });
  });
}
if (popupReviewClose) {
  popupReviewClose.addEventListener('click', function () {
    popupContainerPreview.classList.remove('popup-active');
  });
}
if (popupContainerPreview) {
  popupContainerPreview.addEventListener('click', function (event) {
    if (event.target == popupContainerPreview) {
      popupContainerPreview.classList.remove('popup-active');
    }
  });
}




