$(document).ready(function () {
    $('.burger').click(function (event) {
        $('.burger,.block-1__menu-on-top,.block-1__menu-list-on-top').toggleClass('active');
        $('body').toggleClass('lock');

    });
});
$('.block-10__slider').slick({
    appendArrows: $('.block-10__arrows-for-slider'),
    centerMode: true,
    waitForAnimate: false,
    fade: true,
    responsive: [
        {
            breakpoint: 950,
            settings: {
                variableWidth: true,
                fade: false
            }
        }
    ]
});