/*
    offset().top vs scrollTop()

    DOM.offset().top : 특정 DOM요소의 세로 위치값 (정적)
    window.scrollTop() : 브라우저를 스크롤시 스크롤된 거리값 (동적)
    scrollTop은 animatie()메서드 안에서 키값으로 활용(해당 스크롤 위치로 이동)
*/
var boxs = $('section');
var btns = $('#navi li');
var speed = 1000;
var enableClick = true;
var posArr;

//브라우저 로딩시
setPos();

//브라우저 리사이즈시
$(window).on('resize', function(){
    //세로 섹션의 위치값을 갱신
    setPos();

    //현재 스크롤 위치값을 버튼의 순번의 위치값에 맞게 보정
    var i = btns.filter('.on').index();
    moveScroll(i);
});

//브라우저 스크롤시
$(window).on('scroll', function(e){
    activation(e);
});

//세로버튼 클릭시
btns.on('click', function(e){
    e.preventDefault();

    var isOn = $(e.currentTarget).hasClass('on');
    if(isOn) return;

    if(enableClick){
        var i = $(e.currentTarget).index();
        moveScroll(i);
        enableClick = false;
    }
});

//마우스 휠 이벤트 시
boxs.on('mousewheel',function(e){
    e.preventDefault();

    var i = $(e.currentTarget).index();
    
    if(e.originalEvent.deltaY < 0){
        console.log('wheel up');
        //휠을 올릴때 만약 현재 순번 첫번째 패널이면 함수 중지
        if(i==0) return;
        moveScroll(i-1);
    } else {
        console.log('wheel down');
        //휠을 내릴때 만약 현재 순번이 마지막 패널이면 함수 중지
        if(i==boxs.length-1) return;
        moveScroll(i+1);
    }
})

//박스의 세로위치값을 배열로 저장해주는 함수 정의
function setPos(){
    posArr = [];
    boxs.each(function(index, data){
        posArr.push( boxs.eq(index).offset().top );
    })
    console.log(posArr);
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
function moveScroll(index){
    var targetPos = boxs.eq(index).offset().top;
    $('html, body').stop().animate({scrollTop: targetPos}, speed, function(){
        enableClick = true;
    });
}

