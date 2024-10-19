const navList = document.querySelector('.navbar ul');
const navLinks = document.querySelectorAll('.navbar a');
const hamburger = document.querySelector('.navbar__toggler');

hamburger.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
    hamburger.classList.toggle("open-navbar__toggler");
    navList.classList.toggle("open");
}

navLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
    if (navList.classList.contains("open")) {
        hamburger.click();
    }
}


// setup typing animation.
const textElement = document.querySelector('.animated-text');
const words = ['Programmer', 'Designer', 'Animator', 'Cyber Specialist']; // Array of words
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 200;

function type() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    // Reduce the number of characters for the deleting effect
    charIndex--;
    delay = 100;
  } else {
    // Increase the number of characters for the typing effect
    charIndex++;
    delay = 200;
  }

  // Display the text based on current character index
  textElement.textContent = currentWord.slice(0, charIndex);

  // If the word is completely typed out, pause before deleting
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    delay = 1000; // Wait 1 second before starting to delete
  }
  
  // If the word is completely deleted, move to the next word
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Cycle through the words
  }

  // Repeat the typing/deleting process
  setTimeout(type, delay);
}

// Start the animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
  type();
});
