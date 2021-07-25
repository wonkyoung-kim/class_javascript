/*
    offset().top vs scrollTop()

    DOM.offset().top : 특정 DOM요소의 세로 위치값 (정적)
    window.scrollTop() : 브라우저를 스크롤시 스크롤된 거리값 (동적)
    scrollTop은 animatie()메서드 안에서 키값으로 활용(해당 스크롤 위치로 이동)
*/
var boxs = $('section');
var btns = $('#navi li');
var speed = 1000;
var posArr = [];

//브라우저 로딩시
setPos();

//브라우저 스크롤시
$(window).on('scroll', function(e){
    activation(e);
});

//세로버튼 클릭시
btns.on('click', function(e){
    e.preventDefault();
    moveScroll(e); 
});

//
function setPos(){
    boxs.each(function(index, data){
        posArr.push( boxs.eq(index).offset().top );
    })
}

//윈도우 이벤트 정보값을 인수로 받아서 스크롤위치에 따른 버튼 활성화 함수 정의
function activation(event){
    var scroll = $(event.currentTarget).scrollTop();

    boxs.each(function(index){
        if(scroll >= posArr[index]) {
            btns.removeClass('on');
            btns.eq(index).addClass('on');
        }
    })
}

//이벤트 객체 정보값을 인수로 받아서 해당 섹션위치로 자동 스크롤 함수 정의
function moveScroll(event){
    var target = $(event.currentTarget).children('a').attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').stop().animate({scrollTop: targetPos}, speed);
}

