let teamSwiper = new Swiper('.team-members', {
    spaceBetween: 40,
    breakpoints: {
        0: {
            slidesPerGroup: 1,
            slidesPerView: 1,
        },
        768: {
            slidesPerGroup: 2,
            slidesPerView: 2,
        },
        1440: {
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

// function swiperActivate({ currentTarget: { innerWidth: width } }) {
//     if (width <= 768) {
//         if (!isInit) {
//         }
//     } else {
//         teamSwiper.destroy();
//     }
// }

// window.addEventListener('load', swiperActivate);
