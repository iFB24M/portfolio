/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./node_modules/fb24m-pro-plus/hidden-block.js
let html = document.querySelector('html');
let menuIcons = document.querySelectorAll('[data-open-block]');

menuIcons.forEach(menuIcon => {
    menuIcon.addEventListener('click', e => {
        html.classList.toggle(`_${menuIcon.dataset.openBlock}-opened`);
        html.classList.toggle('lock');
    });    
});
;// CONCATENATED MODULE: ./src/js/scripts/script.js
let languageSelect = document.querySelector('#select-language');

languageSelect.addEventListener('click', (e) => {
	if(languageSelect.classList.contains('language-ru')) {
		languageSelect.classList.remove('language-ru');
		languageSelect.classList.add('language-en');
	}
	else if (languageSelect.classList.contains('language-en')) {
		languageSelect.classList.remove('language-en');
		languageSelect.classList.add('language-ru');
	}
});
;// CONCATENATED MODULE: ./src/js/app.dev.js





/******/ })()
;