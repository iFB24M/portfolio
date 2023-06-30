/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/scripts/script.js
const startTyping = (selector, speed) => {
	let element = document.querySelector(selector);
	element.innerHTML = '<span class="word"></span>';

	let haveCursor = false;

	let word = element.querySelector('.word');

	let toType = element.dataset.typing;
	let symbol = 0;

	const addSymbol = () => {
		if (!haveCursor) {
			element.insertAdjacentHTML('beforeend',
				`<span class="cursor" ${element.dataset.cursorHeight ? `style="height: ${element.dataset.cursorHeight}"` : ''}></span>`);
			haveCursor = true;
		}
		if (symbol === toType.length) {
			let cursor = element.querySelector('.cursor');
			cursor.style.height = '0px';
			cursor.style.animation = 'none';
			return;
		}

		word.insertAdjacentHTML('beforeend', toType[symbol]);
		symbol++;

		setTimeout(addSymbol, speed);
	}
	setTimeout(addSymbol, element.dataset.delay ? element.dataset.delay : 0);
};

startTyping('.welcome__hello', 100);
startTyping('h1.welcome__hello', 100);

window.addEventListener('scroll', () => {
	console.log(window.screenY);
})


const technologiesSlider = new Swiper('.technologies__slider', {
	slidesPerView: 5,
	speed: 1000,
	freeMode: true,
	autoplay: {
		delay: 1000,
		stopOnLastSlide: false
	},
	breakpoints: {
		320: {
			slidesPerView: 3
		},
		425: {
			slidesPerView: 5
		},
		600: {
			slidesPerView: 7
		}
	}
});

// Создаем новый observer (наблюдатель)
let observer = new IntersectionObserver(function (entries) {
	entries.forEach(function (entry) {
		// Выводим в консоль сам элемент
		console.log(entry.target.classList[0]);
		// Выводим в консоль true (если элемент виден) или false (если нет)
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
		}
		else {
			entry.target.classList.remove('active');
		}
	});
});
// Задаем элемент для наблюдения
let typingEls = document.querySelectorAll('.animated');
typingEls.forEach(el => observer.observe(el));
;// CONCATENATED MODULE: ./src/js/app.dev.js



/******/ })()
;