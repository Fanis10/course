function slider() {
    var swiper = new Swiper('.results .swiper', {
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.results .swiper-button-next',
            prevEl: '.results .swiper-button-prev',
        },
        pagination: {
            el: '.results .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

$(document).ready(function() {
    slider()

    let burger = document.querySelector('.header__burger');
    let menu = document.querySelector('.header__nav');
    let body = document.querySelector('body')
    burger.addEventListener('click', function() {
        burger.classList.toggle('header__burger--active');
        menu.classList.toggle('header__nav--active');
        body.classList.toggle('fixed-body');
    })
})