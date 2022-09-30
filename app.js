"strict";

const headerNav = document.querySelector(".header");
const mobileMenuBtns = document.querySelector(".mobile-menu-btns");
const mobileBtnHam = document.querySelector(".mobile-btn-ham");
const mobileBtnX = document.querySelector(".mobile-btn-x");

mobileMenuBtns.addEventListener("click", function () {
  headerNav.classList.toggle("show");
  mobileBtnX.classList.toggle("show");
  mobileBtnHam.classList.toggle("hide");
});
