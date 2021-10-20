const Breakpoints = {
    MD: 768,
    LG: 1440,
};

const TeamSelectors = {
    CONTAINER: '.team-members',
    PREVIOUS_BUTTON: '.team-members__previous',
    NEXT_BUTTON: '.team-members__next',
};

const NavigationSelectors = {
    CONTAINER: '.navigation',
    OPEN_BUTTON: '.navigation__open',
    CLOSE_BUTTON: '.navigation__close',
};

const NavigationClasses = {
    BURGER: 'navigation--burger',
    BURGER_ACTIVE: 'navigation--burger-active',
};

const navigationEl = document.querySelector(NavigationSelectors.CONTAINER);
const navigationOpenEl = document.querySelector(
    NavigationSelectors.OPEN_BUTTON,
);
const navigationCloseEl = document.querySelector(
    NavigationSelectors.CLOSE_BUTTON,
);

function toggleNavigation() {
    if (window.innerWidth <= Breakpoints.MD) {
        navigationEl.classList.add(NavigationClasses.BURGER);
    } else {
        navigationEl.classList.remove(NavigationClasses.BURGER);
        navigationEl.classList.remove(NavigationClasses.BURGER_ACTIVE);
    }
}

function openNavigation() {
    navigationEl.classList.add(NavigationClasses.BURGER_ACTIVE);
}

function closeNavigation() {
    navigationEl.classList.remove(NavigationClasses.BURGER_ACTIVE);
}

navigationOpenEl.addEventListener('click', openNavigation);
navigationCloseEl.addEventListener('click', closeNavigation);

window.addEventListener('load', toggleNavigation);
window.addEventListener('resize', toggleNavigation);
