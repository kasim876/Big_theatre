"use strict"

document.querySelector('.burger_menu').addEventListener("click", myFunction);

function myFunction() {
	document.querySelector('.nav_menu').classList.toggle("open");
	document.querySelector('.close_off').classList.toggle("close_on")
}

document.querySelector('.close_off').addEventListener("click", myFunction2);

function myFunction2() {
	document.querySelector('.nav_menu').classList.toggle("open");
	document.querySelector('.close_off').classList.toggle("close_on")
}