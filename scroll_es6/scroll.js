/*
    offset().top vs scrollTop()

    DOM.offset().top : 특정 DOM요소의 세로 위치값 (정적)
    window.scrollTop() : 브라우저를 스크롤시 스크롤된 거리값 (동적)
    scrollTop은 animatie()메서드 안에서 키값으로 활용(해당 스크롤 위치로 이동)
*/

var posArr = [];

$('section').each(function(index, data){
    posArr.push( $('section').eq(index).offset().top );
})

console.log(posArr);

$(window).on('scroll', function(e){
    var scroll = $(e.currentTarget).scrollTop();

    if(scroll >= posArr[0]){
        $('#navi li').removeClass('on');
        $("#navi li").eq(0).addClass('on');
    }
    if(scroll >= posArr[1]){
        $('#navi li').removeClass('on');
        $("#navi li").eq(1).addClass('on');
    }
    if(scroll >= posArr[2]){
        $('#navi li').removeClass('on');
        $("#navi li").eq(2).addClass('on');
    }
    if(scroll >= posArr[3]){
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
