$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow: '<button type="button" class="btn slider-btn slider-prev"><img src="img/left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="btn slider-btn slider-next"><img src="img/right.svg" alt="arrow-right"></button>',
    })
});