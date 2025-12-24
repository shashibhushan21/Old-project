
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
    },
    loop: true,

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el: '.swiper-pagination',
        types: 'bullets',
        clickable: true,
    },
});