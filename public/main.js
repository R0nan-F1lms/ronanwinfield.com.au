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
// setup portfolio
document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('/api/portfolio');
    const items = await response.json();
    const container = document.getElementById('portfolio-container');

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card__portfolio');
        
        card.innerHTML = `
            <div class="portfolio">
                <a href="${item.image}" target="_blank">
                    <img src="${item.image}" width=200>
                </a>
            </div>
            <div class="info">
                <h2>${item.title}</h2>
            </div>
        `;

        container.appendChild(card);
    });
});