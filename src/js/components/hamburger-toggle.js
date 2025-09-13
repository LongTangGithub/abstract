
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerButton = document.querySelector('.tcon-menu--xcross');
const hamburgerIcon = hamburgerButton?.querySelector('.fa');

function showMobileMenu() {
    mobileMenu.classList.add('mobile-menu--active');
    document.querySelector('.header-container').classList.add('header-container--menu-open');
    // hamburgerButton.classList.add('hamburger--active');

    if (hamburgerIcon) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    }
}

function hideMobileMenu() {
    mobileMenu.classList.remove('mobile-menu--active');
    document.querySelector('.header-container').classList.remove('header-container--menu-open');
    // hamburgerButton.classList.remove('hamburger--active');

    if (hamburgerIcon) {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
}


let isMenuOpen = false;

function toggleMobileMenu() {
    if (isMenuOpen) {
        hideMobileMenu();
        isMenuOpen = false;
    } else {
        showMobileMenu();
        isMenuOpen = true;
    }
}

function setUpEventListeners() {
    if (hamburgerButton && hamburgerIcon) {
        hamburgerButton.addEventListener('click', toggleMobileMenu);
    }    
}

export function initHamburgerToggle() {
    setUpEventListeners();
}