
//  Hamburger menu:
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
    // If the hamburger menu does not contain the active selector add the selector:
    if(!hamburger.classList.contains('active')) {
        hamburger.classList.add('active')
    }else {
      hamburger.classList.remove('active');
    }
    // Adding the active selector to the links class:
    if(!links.classList.contains('active')) {
        links.classList.add('active')
    }else {
      links.classList.remove('active')
    }
})
// Removing class active when the user clicks on the links in the nav menu:
links.addEventListener('click', function() {
    if(links.classList.contains('active')){
        links.classList.remove('active')
    }
})


toTop = document.querySelector("#back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button:
window.onscroll = () => {
    scrollFunction()
};

// Eventlisterner for scrolling to the top of the page when the button is clicked:
toTop.addEventListener('click', () => {
    topFunction();
})

// Function to check if the document has been scrolled more than 20 pixels:
// If the document has been scrolled more than 20 px display the button otherwise remove the button:
const  scrollFunction = () =>  {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


