/*
    offset().top vs scrollTop()

    DOM.offset().top : 특정 DOM요소의 세로 위치값 (정적)
    window.scrollTop() : 브라우저를 스크롤시 스크롤된 거리값 (동적)
    scrollTop은 animatie()메서드 안에서 키값으로 활용(해당 스크롤 위치로 이동)
*/

$(window).on('scroll', function(e){
    var scroll = $(e.currentTarget).scrollTop();
    var posBox2 = $('#box2').offset().left;
    $('h1').text(scroll);
});

$('#navi li').on('click', function(e){
    e.preventDefault();

    var target = $(e.currentTarget).children('a').attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').stop().animate({scrollTop: targetPos}, 1000);

    $('#navi li').removeClass('on');
    $(e.currentTarget).addClass('on');
})