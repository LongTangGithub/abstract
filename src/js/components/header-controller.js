class HeaderController {
    constructor() {
        this.elements = this.cacheElements();
        this.state = { 
            isMenuOpen: false, 
            isSearchOpen: false 
        };
        this.init();
    }

    cacheElements() {
        return {
            // Search elements
            searchOverlay: document.querySelector('.search-overlay'),
            searchButton: document.querySelector('.btn--toggle-search'),
            searchCloseButton: document.querySelector('.search-overlay__close'),
            
            // Menu elements
            mobileMenu: document.querySelector('.mobile-menu'),
            hamburgerButton: document.querySelector('.tcon-menu--xcross'),
            hamburgerIcon: null, // Set after validation
            
            // Shared
            headerContainer: document.querySelector('.header-container')
        };
    }

    init() {
        this.validateAndBindEvents();
    }

    validateAndBindEvents() {
        // Search functionality
        if (this.elements.searchOverlay && this.elements.searchButton && this.elements.searchCloseButton) {
            this.elements.searchButton.addEventListener('click', () => this.showSearch());
            this.elements.searchCloseButton.addEventListener('click', () => this.hideSearch());
        } else {
            console.warn('HeaderController: Search elements not found');
        }

        // Menu functionality  
        if (this.elements.mobileMenu && this.elements.hamburgerButton) {
            this.elements.hamburgerIcon = this.elements.hamburgerButton.querySelector('.fa');
            this.elements.hamburgerButton.addEventListener('click', () => this.toggleMenu());
        } else {
            console.warn('HeaderController: Menu elements not found');
        }
    }

    // Search methods
    showSearch() {
        if (this.state.isSearchOpen) return;
        
        this.elements.searchOverlay.classList.add('search-overlay--active');
        this.state.isSearchOpen = true;
    }

    hideSearch() {
        if (!this.state.isSearchOpen) return;
        
        this.elements.searchOverlay.classList.remove('search-overlay--active');
        this.state.isSearchOpen = false;
    }

    // Menu methods
    toggleMenu() {
        if (this.state.isMenuOpen) {
            this.hideMenu();
        } else {
            this.showMenu();
        }
    }

    showMenu() {
        this.elements.mobileMenu.classList.add('mobile-menu--active');
        this.elements.headerContainer.classList.add('header-container--menu-open');
        
        if (this.elements.hamburgerIcon) {
            this.elements.hamburgerIcon.classList.remove('fa-bars');
            this.elements.hamburgerIcon.classList.add('fa-times');
        }
        
        this.state.isMenuOpen = true;
    }

    hideMenu() {
        this.elements.mobileMenu.classList.remove('mobile-menu--active');
        this.elements.headerContainer.classList.remove('header-container--menu-open');
        
        if (this.elements.hamburgerIcon) {
            this.elements.hamburgerIcon.classList.remove('fa-times');
            this.elements.hamburgerIcon.classList.add('fa-bars');
        }
        
        this.state.isMenuOpen = false;
    }
}

export function initHeader() {
    new HeaderController();
}