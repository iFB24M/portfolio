/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/modules/multypage-list.js
let openInfo = document.querySelector('#multypage-open');

openInfo.addEventListener('click', e => {
    document.documentElement.classList.toggle('_multypage-opened');
});
;// CONCATENATED MODULE: ./src/js/scripts/script.js
new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 2500
  },
  centeredSlides: true
});

let starRatings = document.querySelectorAll('[data-stars]');

starRatings.forEach(starRating => {
  for(let i = 0; i < Number(starRating.getAttribute('data-stars')); i++) {
    starRating.innerHTML = `${starRating.innerHTML} <svg class="review-reviews__star review-reviews__star_fill"><use href="img/icons/icons.svg#star"></use></svg>`
  }
  for(let i = 0; i < 5 - Number(starRating.getAttribute('data-stars')); i++) {
    starRating.innerHTML = `${starRating.innerHTML} <svg class="review-reviews__star review-reviews__star_empty"><use href="img/icons/icons.svg#star"></use></svg>`
  }
});
;// CONCATENATED MODULE: ./src/js/app.dev.js




console.log('hello')
/******/ })()
;