/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/multypage-list.js
//import '../../scss/base/multypage.scss';

let openInfo = document.querySelector('#multypage-open');

openInfo.addEventListener('click', e => {
    document.documentElement.classList.toggle('_multypage-opened');
});
;// CONCATENATED MODULE: ./src/js/scripts/script.js
const check = selector => {
  if(document.querySelector(selector)) {
    return true;
  }
  return false
}
if(check('.welcome-slider')) {
  new Swiper('.welcome-slider', {
    loop: true,
    autoplay: {
      delay: 5000
    }
  });
}
if(check('.portfolio__slider')) {
  const portfolioSlider = new Swiper('.portfolio__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next"
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      650: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  });
  let portfolioPrevButton = document.querySelector('#portfolio-prev');
  let portfolioNextButton = document.querySelector('#portfolio-next');

  if(portfolioPrevButton && portfolioNextButton) {
    portfolioPrevButton.addEventListener('click', e => {
      portfolioSlider.slidePrev();
    });
    portfolioNextButton.addEventListener('click', e => {
      portfolioSlider.slideNext();
    });
  }
}
if(document.querySelector('.reviews__slider')) {
  const reviewsSlider = new Swiper('.reviews__slider', {
    loop: true
  });
  let reviewsPrevButton = document.querySelector('#reviews-prev');
  let reviewsNextButton = document.querySelector('#reviews-next');
  
  reviewsPrevButton.addEventListener('click', e => {
    reviewsSlider.slidePrev();
  });
  reviewsNextButton.addEventListener('click', e => {
    reviewsSlider.slideNext();
  });
}

if(document.querySelector('._project-page')) {
  let sliderTop = document.querySelector('.project-top__slider');
  let container = document.querySelector('.project-top__container');

  container.insertAdjacentHTML('beforeend', `<div class="project-top__slider list swiper">${sliderTop.innerHTML}</div>`);
}
const projectTopSlider = new Swiper('.project-top__slider', {
  loop: true
});

const projectTopList = new Swiper('.project-top__slider.list', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  slideToClickedSlide: true,
  breakpoints: {
    320: {
      slidesPerView: 3
    },
    375: {
      slidesPerView: 4
    },
    425: {
      slidesPerView: 5
    },
    550: {
      slidesPerView: 6
    },
    670: {
      slidesPerView: 7
    },
    768: {
      slidesPerView: 8
    },
    1024: {
      slidesPerView: 9
    },
    1230: {
      slidesPerView: 10
    }
  }
});
;// CONCATENATED MODULE: ./src/js/app.dev.js





/******/ })()
;