const Breakpoints = {
    MD: 768,
    LG: 1440,
};

const teamSwiper = new Swiper('.team-members', {
    spaceBetween: 40,
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        [Breakpoints.MD]: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        [Breakpoints.LG]: {
            slidesPerGroup: 4,
            slidesPerView: 4,
        },
    },
    navigation: {
        prevEl: '.team-members__previous',
        nextEl: '.team-members__next',
    },
    observer: true,
    observeParents: true,
});

const navigationOpenEl = document.querySelector('.navigation__open');
const navigationCloseEl = document.querySelector('.navigation__close');

function toggleNavigation() {
    const navigationEl = document.querySelector('.navigation');

    if (window.innerWidth <= Breakpoints.MD) {
        navigationEl.classList.add('navigation--burger');
    } else {
        navigationEl.classList.remove('navigation--burger');
        navigationEl.classList.remove('navigation--burger-active');
    }
}

function openNavigation() {
    const navigationEl = document.querySelector('.navigation');
    navigationEl.classList.add('navigation--burger-active');
}

function closeNavigation() {
    const navigationEl = document.querySelector('.navigation');
    navigationEl.classList.remove('navigation--burger-active');
}

navigationOpenEl.addEventListener('click', openNavigation);
navigationCloseEl.addEventListener('click', closeNavigation);

window.addEventListener('load', toggleNavigation);
window.addEventListener('resize', toggleNavigation);
