const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.links')
const logo = document.querySelector('.logo')
const buttons = document.querySelector('#button')
const buttonindex = document.querySelector('.button-index')
const hidden = document.querySelectorAll('.hidden-content');

// Toggle the 'active' class on click
// Store the original background color
const originalBackgroundColor = document.body.style.backgroundColor || ''; // If no background color is initially set, use an empty string
// Variable to track the current color state
let isOriginalColor = true;

menu.addEventListener('click', () => {
   
    navLinks.classList.toggle('active');
    links.classList.toggle('active');
    if (isOriginalColor) {
        // Change to new color
        document.body.style.backgroundColor = '#0A2A08';
        hidden.forEach(hidden=> hidden.style.display='none')
    } else {
        // Revert to original color
        document.body.style.backgroundColor = originalBackgroundColor;
        hidden.forEach(hidden=> hidden.style.display='block')
    }

    // Toggle the color state
    isOriginalColor = !isOriginalColor;
 

});


buttons.addEventListener('click',()=>{
buttonindex.classList.toggle('active');
hidden.forEach(hidden=> hidden.style.display='none')
document.body.style.backgroundColor=originalBackgroundColor;



})

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let index = 0;

function updateCarousel() {
    const offset = -index * (images[0].clientWidth + 10); // 10 is the margin-right
    carousel.style.transform = `translateX(${offset}px)`;
}

nextButton.addEventListener('click', () => {
    if (index < images.length - 1) {
        index++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});



