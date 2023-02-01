$('#hamburger-btn').on('click',function() {
    $('#nav').toggleClass('open')
})


//jQ 스크롤 이벤트를 잘 몰라서 샘플페이지에서 베꼈습니다.
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

