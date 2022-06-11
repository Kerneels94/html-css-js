/*
 *Nav menu functionalit
 */

const hamBurger: any = document.querySelector(".hamburger");
const navMenu: any = document.querySelector(".nav-menu");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  hamBurger.classList.remove("active");
  navMenu.classList.remove("active");
});

document.querySelectorAll("nav-menu").forEach(() => {
  hamBurger.classList.remove("active");
  navMenu.classList.remove("active");
});

/*
 *Danamically updating the time every year
 */

const date: any = document.querySelector("#date");

date.textContent = new Date().getFullYear();

/*
 *Scroll button
 */

const btn: any = document.querySelector("#myBtn");

function scrollFunction() {
  // display button when the user scrolls past a certain amount of pixels
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topScroll() {
  document.body.scrollTop = 0; // Safari browser
  document.documentElement.scrollTop = 0; // Chrome, Firebox, Ie, Opera
}

window.onscroll = () => {
  scrollFunction();
};

/*
 *Slider
 */

const slides = document.querySelectorAll(".slide");
const nextBtn: any = document.querySelector(".nextBtn");
const prevBtn: any = document.querySelector(".prevBtn");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

const carousel = () => {
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

/*
 *Alert for when the user clickedon the send button
 */

const screenAlert: any = document.querySelector("form-control-submit");
const formControl: any = document.querySelector(".form-control");
screenAlert.addEventListener("click", () => {
  alert("Thank you for contacting us, We will get back to you shortly");
  formControl.textContent = "";
});
