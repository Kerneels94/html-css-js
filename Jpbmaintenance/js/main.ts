//  Burger menu
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

// Setting the date dynamically

const date: any = document.querySelector("#date");

date.textContent = new Date().getFullYear();

// Scroll button

//   Getting the button from the document
const btn: any = document.querySelector("#myBtn");

function scrollFunction() {
  // display button when the user scrolls past a certain amount of pixels from the top of the page
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// Clicking on the button will send the user to the top of the page
function topScroll() {
  document.body.scrollTop = 0; // Safari browser
  document.documentElement.scrollTop = 0; // Chrome, Firebox, Ie, Opera
}

//  when the user scrolls down from the top of the document show button
window.onscroll = () => {
  scrollFunction();
};

// Slider

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
