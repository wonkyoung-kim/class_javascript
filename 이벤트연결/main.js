/*
이벤트 : 사용자,시스템이 웹상에서 하는 모든 행동을 이벤트
'click, mouseenter, mouseleave, scroll, resize, mousewheel'

이벤트 발생시 이벤트문 자동으로 이벤트 객체 전달됨
- e.preventDefault() : 헤당DOM의 기본 동작기능을 막아줌
- e.currentTarget : 이벤트가 발생된 대상을 탐색
- e.pageX : 마우스 커서의 현재 가로 위치값
- e.pageY : 마우스 커서의 현재 세로 위치값

*/

var btn1 = document.querySelectorAll('ul li')[0];

//es5
/*
for(let i=0; i<btns.length; i++){
    btns[i].onclick = function(e){
        console.log(e);
        console.log(this);
    }
}

btn1.onclick = function(){
    console.log('test');
}

btn1.onclick = function(){
    console.log('test2');
}
*/

btn1.addEventListener('click', function(){
    console.log('test');
})

btn1.addEventListener('click', function(){
    console.log('test2');
})

//브라우저에서 마우스 움직일시 마우스 좌표값 구하기
window.addEventListener('mousemove', function(e){
    var posX = e.pageX;
    var posY = e.pageY;

    console.log('현재 x축 위치:'+posX);
    console.log('현재 y축 위치:'+posY);
})