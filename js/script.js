$('#hamburger-btn').on('click',function() {
    $('#nav').toggleClass('open')
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
