'use strict';

const navList = document.querySelector('#header__nav');
const navLinks = document.querySelectorAll('.nav__link');
const btnMenu = document.querySelector('#nav__button');

btnMenu.addEventListener('click', () => {
  navList.classList.toggle('nav--show');
  btnMenu.classList.toggle('nav__button--close');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('nav--show');
    btnMenu.classList.remove('nav__button--close');
  });
});
