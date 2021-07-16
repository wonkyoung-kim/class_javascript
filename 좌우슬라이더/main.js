var $slider = $('#slider');
var $slider2 = $('#slider2');
var $prev = $('.prev');
var $next = $('.next');
var speed = 500;

//화면로딩시 ul,li 넓이값과 패널 위치값 초기화함수 호출
init($slider);
init($slider2);

//다음 버튼클릭시 next함수 호출
$next.on('click', function(e){
    e.preventDefault();

    next($slider);
    next($slider2);
})
//이전버튼클릭시 prev함수 호출
$prev.on('click', function(e){
    e.preventDefault();

    prev($slider);
    prev($slider2);
})

//화면 초기화 함수 정의
function init(el) {
    var len = el.find('li').length;
    el.children('ul').css({ 
        width: 100*len+'%',
        marginLeft: '-100%',
        height: '100%'
    })

    el.find('li').css({
        width: 100/len+'%',
        height: '100%',
        float: 'left'
    })

    el.find('li').last().prependTo(el.children('ul'));
}
//next이동 함수 정의
function next(el) {
    el.find('ul').animate({ marginLeft : "-200%" }, speed, function(){
        $(this).find('li').first().appendTo(this);
        $(this).css({ marginLeft : '-100%' });
    });
}
//prev이동 함수 정의
function prev(el) {
    el.find('ul').animate({ marginLeft : "0%" }, speed, function(){
        $(this).find('li').last().prependTo(this);
        $(this).css({ marginLeft : '-100%'});
    })
}


/*
    DOM구조 변경 메서드
    $(선택자).appendTo(부모요소) : 선택자를 부모요소 안에서 제일 뒤쪽에 배치
    $(선택자).prependTo(부모요소) : 선택자를 부모요소 앞에서 제일 앞쪽에 배치
*/