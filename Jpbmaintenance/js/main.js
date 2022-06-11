//  Burger menu
var hamBurger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");
hamBurger.addEventListener("click", function () {
    hamBurger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
navMenu.addEventListener("click", function () {
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
});
document.querySelectorAll("nav-menu").forEach(function () {
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
});
// Setting the date dynamically
var date = document.querySelector("#date");
date.textContent = new Date().getFullYear();
// Scroll button
//   Getting the button from the document
var btn = document.querySelector("#myBtn");
function scrollFunction() {
    // display button when the user scrolls past a certain amount of pixels from the top of the page
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}
// Clicking on the button will send the user to the top of the page
function topScroll() {
    document.body.scrollTop = 0; // Safari browser
    document.documentElement.scrollTop = 0; // Chrome, Firebox, Ie, Opera
}
//  when the user scrolls down from the top of the document show button
window.onscroll = function () {
    scrollFunction();
};
// Slider
var slides = document.querySelectorAll(".slide");
var nextBtn = document.querySelector(".nextBtn");
var prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
    slide.style.left = "".concat(index * 100, "%");
});
var counter = 0;
nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});
prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});
var carousel = function () {
    if (counter === slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach(function (slide) {
        slide.style.transform = "translateX(-".concat(counter * 100, "%)");
    });
};
