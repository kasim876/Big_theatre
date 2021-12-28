"use strict"

document.querySelector('.nav__menu__btn').addEventListener("click", navMenu);
document.querySelector('.nav__menu__close').addEventListener("click", navMenu);

let items = document.querySelectorAll('.nav__menu__item');
for (let item of items) {
	item.addEventListener("click", navMenu)
}

function navMenu() {
	document.querySelector('.nav__menu').classList.toggle('open');
}

let goTopBtn = document.querySelector('.back_to_top');
window.addEventListener("scroll", trackScroll);

function trackScroll() {
	let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
}