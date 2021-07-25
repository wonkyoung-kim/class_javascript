/*
    offset().top vs scrollTop()

    DOM.offset().top : 특정 DOM요소의 세로 위치값 (정적)
    window.scrollTop() : 브라우저를 스크롤시 스크롤된 거리값 (동적)
    scrollTop은 animatie()메서드 안에서 키값으로 활용(해당 스크롤 위치로 이동)
*/

var pos1 = $('#box1').offset().top;
var pos2 = $('#box2').offset().top;
var pos3 = $('#box3').offset().top;
var pos4 = $('#box4').offset().top;

$(window).on('scroll', function(e){
    var scroll = $(e.currentTarget).scrollTop();
    var posBox2 = $('#box2').offset().top;
    $('h1').text(scroll);

    if(scroll >= pos1){
        $('#navi li').removeClass('on');
        $("#navi li").eq(0).addClass('on');
    }
    if(scroll >= pos2){
        $('#navi li').removeClass('on');
        $("#navi li").eq(1).addClass('on');
    }
    if(scroll >= pos3){
        $('#navi li').removeClass('on');
        $("#navi li").eq(2).addClass('on');
    }
    if(scroll >= pos4){
        $('#navi li').removeClass('on');
        $("#navi li").eq(3).addClass('on');
    }
});

$('#navi li').on('click', function(e){
    e.preventDefault();

    var target = $(e.currentTarget).children('a').attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').stop().animate({scrollTop: targetPos}, 1000);

})
