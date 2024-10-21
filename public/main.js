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


// cound down.

// Function to calculate and display years of experience
function calculateExperience() {
    const startYear = 2021;
    const currentYear = new Date().getFullYear(); // Get the current year
    const yearsOfExperience = currentYear - startYear; // Calculate experience
    const yearsElement = document.getElementById("years");
  
    // Animate count up
    let count = 0;
    const interval = setInterval(() => {
      if (count < yearsOfExperience) {
        count++;
        yearsElement.innerText = count; // Update the displayed count
      } else {
        clearInterval(interval); // Stop the interval when complete
      }
    }, 1000); // Adjust the speed as necessary (1000 ms = 1 second)
  }
  
  // Call the function on page load
  window.onload = calculateExperience;
  

