/* 
제이쿼리 이벤트
- 사용자, 시스템이 웹상에서는 모든 행동
- 이벤트에 따라서 연결되는 함수에 특별한 인수값이 전달되기도 함
- 자주 쓰이는 이벤트
-- click : 클릭
-- mouseenter : 마우스오버
-- mouseleave : 마우스아웃
-- scroll : (브라우저를) 스크롤할 때
-- resize : (브라우저를 ) 리사이즈할 떄
-- mousewheel : 마우스 휠 버튼을 위아래로 조작할 때
*/

//click 이벤트
$('ul li a').on('click', function(e){
    e.preventDefault();
    //이벤트의 기본 기능을 막아줌
    console.log('클릭했씁니다.');
})

//mousemove 이벤트
$(window).on('mousemove',function(e){
    e.preventDefault();
    var posX = e.pageX;
    // console.log(posX);
})

//scroll 이벤트
$(window).on('scroll', function(e){
    var scroll = $(this).scrollTop();
    // console.log(scroll);
})

//mousewheel 이벤트
$(window).on('mousewheel', function(e){
    // e.preventDefault();
    console.log(e.originalEvent.wheelDeltaY);
    if(e.originalEvent.wheelDelta > 0) {
        console.log('wheel up');
    } else {
        console.log('wheel down');
    }
})