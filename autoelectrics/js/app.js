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
;// CONCATENATED MODULE: ./node_modules/fb24m-pro-plus/spoilers.js


let spoilers = document.querySelectorAll('[data-spoiler]');
let spoilerContents = document.querySelectorAll('.spoiler-content');

spoilerContents.forEach(spoilerContent => {
    spoilerContent.style.marginTop = `-${spoilerContent.offsetHeight}px`
});

for(let i = 0; i < spoilers.length; i++) {
    let spoiler = spoilers[i];
    
    spoiler.addEventListener('click', e => {
        spoiler.classList.toggle('_spoiler-opened');
        
        let spoilerContent = spoiler.querySelector('.spoiler-content');
        
        if(spoilerContent.style.marginTop != '0px') {
            spoilerContent.style.marginTop = '0';
        }
        else if(spoilerContent.style.marginTop == '0px') {
            spoilerContent.style.marginTop = `-${spoilerContent.offsetHeight}px`;
        }
    });
};
;// CONCATENATED MODULE: ./src/js/modules/multypage-list.js
//import '../../scss/base/multypage.scss';

let openInfo = document.querySelector('#multypage-open');

openInfo.addEventListener('click', e => {
    document.documentElement.classList.toggle('_multypage-opened');
});
;// CONCATENATED MODULE: ./src/js/app.dev.js









/******/ })()
;