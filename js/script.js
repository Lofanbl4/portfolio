let hamb = document.querySelector('.menu__burger');
let navMenu = document.querySelector('.menu__items');

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active")
}

const navLink = document.querySelectorAll(".menu__link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
}