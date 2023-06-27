document.addEventListener("DOMContentLoaded", () => {
  $('.hero-swiper').slick({
    arrows: false,
    dots: true,
    appendDots: $('.hero-swiper'),
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    speed: 1000,
    autoplaySpeed: 4000,
    easing: 'ease-in-out',
    infinite: true,
  });
  $('.product-pict__product-pict-nav').slick({
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
        breakpoint: 385,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

});


const productSwiper = new Swiper('.product-pict__swiper', {
  slidesPerView: 1,
});

const specialSwiper = new Swiper('.special-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 32,
  navigation: {
    nextEl: '.special-next',
    prevEl: '.special-prev',
  },
});

const usefullSwiper = new Swiper('.usefull-swiper', {
  slidesPerView: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: '.usefull-next',
    prevEl: '.usefull-prev',
  },
  breakpoints: {
    541: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1152: {
      slidesPerView: 2,
    }
  }
});

const sameProductsSwiper = new Swiper('.same-products-swiper', {
  slidesPerView: 2,
  spaceBetween: 16,
  navigation: {
    nextEl: '.same-products-next',
    prevEl: '.same-products-prev',
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  }
});

const productSwiperPopup = new Swiper('.popup-preview__swiper', {
  slidesPerView: 1,
});

const swiperPictNavItems = document.querySelectorAll('.product-pict-page-item');
const swiperPictPopupItems = document.querySelectorAll('.product-pict-popup-item');
const swiperNavItems = document.querySelectorAll('.product-nav__item');

swiperPictNavItems.forEach((el, index) => {
  el.setAttribute('data-index', index);
  el.addEventListener('click', (e) => {
    const index = parseInt(e.currentTarget.dataset.index);
    productSwiper.slideTo(index);
  });
});
swiperPictPopupItems.forEach((el, index) => {
  el.setAttribute('data-index', index);
  el.addEventListener('click', (e) => {
    const index = parseInt(e.currentTarget.dataset.index);
    productSwiperPopup.slideTo(index);
  });
});
swiperNavItems.forEach((el, index) => {
  el.setAttribute('data-index', index);
  el.addEventListener('click', (e) => {
    const index = parseInt(e.currentTarget.dataset.index);
    productSwiper.slideTo(index);
  });
});
