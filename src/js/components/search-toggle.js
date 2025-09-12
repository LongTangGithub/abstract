const searchOverlay = document.querySelector('.search-overlay');

function showOverlay() {
    searchOverlay.classList.add('search-overlay--active');
}

function hideOverlay() {
    searchOverlay.classList.remove('search-overlay--active');
}

function setUpEventListeners() {
    const toggleSearchButton = document.querySelector('.btn--toggle-search');
    const closeSearchButton = document.querySelector('.search-overlay__close');

    if (toggleSearchButton) {
        toggleSearchButton.addEventListener('click', showOverlay);
    }
    
    if (closeSearchButton) {
        closeSearchButton.addEventListener('click', hideOverlay);
    }
}

export function initSearchToggle() {
    setUpEventListeners();
}