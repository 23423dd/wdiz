const hamburgerBtn = document.getElementById('hamburger-btn')
const nav = document.getElementById('nav')


hamburgerBtn.addEventListener('click', function () {
    nav.classList.toggle('open')

}) 



function navInit() {
    $(window).on('scroll',function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("#header").addClass("stickyadd");
        } else {
            $("#header").removeClass("stickyadd");
        }
    });
} 

navInit();