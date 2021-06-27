//DOM선택 (아이디, 클래스, 태그선택자)
/*
$('#wrap').css({'border':'1px solid red'});
$('.item').css({'border':'1px solid blue'});
$('ul li').css({'border':'1px solid pink'});

//복수개의 DOM 이벤트 연결하기
$('.btns li, #wrap article').on('click', function(e){
    e.preventDefault();
    console.log(this);
});

//하나의 DOM에 복수개의 이벤트를 연결 가능
$('h1').on('click mouseenter', function(){
    console.log(this);
})

//하나의 DOM에 복수개의 이벤트와 핸들러함수 연결 가능
$('h1').on({
    'click' : function(){
        console.log('you clicked!');
    },
    'mouseenter' : function() {
        console.log('you mouseentered!');
    },
    'mouseleave' : function(){
        console.log('you mouseleaved!!');
    }
});
*/

//여러개 요소 중에서 특정 요소만 활성화 하고 싶을때
//방법 1
$('.btns li a').on('click', function(e){
    e.preventDefault();
    $('.btns li a').css({'color':'gray'});
    $(this).css({'color':'hotpink'});
});

//순서값을 활용한 특정 요소 활성화 하고 싶을때
//방법 2
$('#wrap article').on('click', function(){
    $('#wrap article').css({'color':'gray'});
    
    var i = $(this).index();
    $('#wrap article').eq(i).css({'color':'hotpink'});
})