$(document).ready(function () {
    $(".sliders").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        prevArrow: '<button type="button" class="btn slider-btn slider-prev"><img src="img/left.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="btn slider-btn slider-next"><img src="img/right.svg" alt="arrow-right"></button>',
    })
});

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

let navButton = document.getElementById('nav-btn');
let navList = document.getElementById('nav-list');

navButton.onclick = function() {
    navList.classList.toggle('close');
}