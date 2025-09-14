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

        // Escape key functionality
        document.addEventListener('keydown', (e) => this.handleKeydown(e));

    }

    // Search methods
    showSearch() {
        if (this.state.isSearchOpen) return;

        this.elements.searchOverlay.classList.add('search-overlay--active');
        this.elements.searchOverlay.setAttribute('aria-hidden', 'false');
        
        // Focus the search input
        this.elements.searchOverlay.querySelector('.search-overlay__input')?.focus();
        
        this.state.isSearchOpen = true;
    }

    hideSearch() {
        if (!this.state.isSearchOpen) return;
    
        this.elements.searchOverlay.classList.remove('search-overlay--active');
        this.elements.searchOverlay.setAttribute('aria-hidden', 'true');
        
        // Return focus to search button
        this.elements.searchButton?.focus();
        
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
        this.elements.mobileMenu.setAttribute('aria-hidden', 'false');
        this.elements.hamburgerButton.setAttribute('aria-expanded', 'true');
        
        if (this.elements.hamburgerIcon) {
            this.elements.hamburgerIcon.classList.remove('fa-bars');
            this.elements.hamburgerIcon.classList.add('fa-times');
        }
        
        // Focus first menu link
        this.elements.mobileMenu.querySelector('.mobile-menu__link')?.focus();
        
        this.state.isMenuOpen = true;
    }

    hideMenu() {
        this.elements.mobileMenu.classList.remove('mobile-menu--active');
        this.elements.headerContainer.classList.remove('header-container--menu-open');
        this.elements.mobileMenu.setAttribute('aria-hidden', 'true');
        this.elements.hamburgerButton.setAttribute('aria-expanded', 'false');
        
        if (this.elements.hamburgerIcon) {
            this.elements.hamburgerIcon.classList.remove('fa-times');
            this.elements.hamburgerIcon.classList.add('fa-bars');
        }
        
        // Return focus to hamburger button
        this.elements.hamburgerButton?.focus();
        
        this.state.isMenuOpen = false;
    }

    handleKeydown(e) {
        if (e.key === 'Escape') {
            if (this.state.isSearchOpen) {
                this.hideSearch();
            }
            if (this.state.isMenuOpen) {
                this.hideMenu();
            }
        }
    }

}

export function initHeader() {
    new HeaderController();
}