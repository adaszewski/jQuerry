$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.main-menu').addClass('open')
    })

    $('.main-menu-item a').click(function (e) {
        e.preventDefault();

        $('body').fadeOut(3000, function () {
            window.location.href = $(e.target).attr('href');
        });
    })
})