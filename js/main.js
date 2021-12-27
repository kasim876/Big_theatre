"use strict"

document.querySelector('.nav__menu').addEventListener("click", navMenu);

function navMenu() {
	document.querySelector('.nav__menu__open').classList.toggle('change')
	document.querySelector('.nav__menu__close').classList.toggle('change')
}

document.querySelector('.nav__menu__close').addEventListener("click", navMenu);

