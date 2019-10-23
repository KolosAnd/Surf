$(function () {

    $('.header_slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrow slider-arrow-left" src="img/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrow slider-arrow-right" src="img/arrow-right.svg" alt="">',
        asNavFor: '.slider-dots',
    });

    $('.slider-dots').slick({
        slidesToScroll: 4,
        slidesToShow: 4,
        asNavFor: '.header_slider',
    });
});
