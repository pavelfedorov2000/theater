window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.fixed-panel--menu'),
        hamburger = document.querySelector('.hamburger'),
        close = document.querySelector('.fixed-panel__close');

    hamburger.addEventListener('click', () => {
        menu.style.left = '0px';
    });

    close.addEventListener('click', () => {
        menu.style.left = '-50%';
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });
    
    // Smooth scroll
    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});