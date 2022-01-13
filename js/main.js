"use strict"

const next = document.querySelector(".arrow1__svg"),
      prev = document.querySelector(".arrow2__svg"),
      items = document.querySelectorAll(".nav__menu__item"),
      goTopBtn = document.querySelector(".back_to_top"),
      slides = document.querySelectorAll(".slide"),
      modal = document.querySelector(".modal");

let index = 0;

const navMenu = () => {
        document.querySelector('.nav__menu').classList.toggle('open');
        modal.classList.toggle("active");
};

const trackScroll = () => {
	let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    if (scrolled > coords / 2) {
      goTopBtn.classList.add('back_to_top-show');
    } else if (scrolled < coords / 2) {
      goTopBtn.classList.remove('back_to_top-show');
    }
};

const returnTop = () => {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(returnTop, 0);
    }
};

const activeSlide = n => {
    for (let slide of slides) {
        slide.classList.remove("active");
    }
    slides[n].classList.add("active");
}

const nextSlide = () => {
    if (index === slides.length - 1){
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if (index === 0){
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

for (let item of items) {
	item.addEventListener("click", navMenu);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
goTopBtn.addEventListener("click", returnTop);
window.addEventListener("scroll", trackScroll);
document.querySelector(".nav__menu__btn").addEventListener("click", navMenu);
document.querySelector(".nav__menu__close").addEventListener("click", navMenu);
modal.addEventListener("click", navMenu);
