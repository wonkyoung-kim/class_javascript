let $frame = $('#slider');
let $btns = $frame.find('.btns li');
let $panel = $frame.find('.panel');
let $circle = $('#circle');
let speed = 1000;

//버튼 클릭시 activation함수 호출
$btns.on('click', function(e){
    e.preventDefault();

    //만약 사용자가 클릭한 "그"버튼에 클래스 on이 있는지 확인 
    var isOn = $(this).children('a').hasClass('on');
    //isOn값이 true면 (내가 클릭한 버튼이 이미 활성화되어있으면)
    //return문을 실행해서 바로 이벤트문 종료.
    if(isOn) return;

    //만약 isOn값이 false면 위의 조건문 자체가 무시되고
    //activation함수 호출
    activation(this);
});

//버튼활성화 및 패널 이동기능의 함수 정의
function activation(evt) {
    console.log('복잡한 코드 실행');
    //el라는 통로를 통해서 외부에서 집어넣은 this값을 내부로 전달해줌
    //순번값을 구해서
    let i = $(evt).index();
    //해당 순번에 맞는 위치로 패널자체를 이동
    $panel.animate({marginLeft : (-100 * i)+'%'}, speed);
    //순간적으로 모든 버튼을 비활성화 시키고
    $btns.children('a').removeClass('on');
    //내가 클릭한 요소의 자식a요소만 활성화
    $(evt).children('a').addClass('on');

    rotation(i+1);
}

function rotation(index) {
    $circle.removeClass();
    $circle.addClass( 'rot'+index );
}

/*
$('#slider .btns li').eq(0).on('click', function(e){
    e.preventDefault();
    $('#slider .panel').animate({marginLeft : 0}, 1000);
});

$('#slider .btns li').eq(1).on('click', function(e){
    e.preventDefault();
    $('#slider .panel').animate({marginLeft : -300}, 1000);
});

$('#slider .btns li').eq(2).on('click', function(e){
    e.preventDefault();
    $('#slider .panel').animate({marginLeft : -600}, 1000);
});

$('#slider .btns li').eq(3).on('click', function(e){
    e.preventDefault();
    $('#slider .panel').animate({marginLeft : -900}, 1000);
});

$('#slider .btns li').eq(4).on('click', function(e){
    e.preventDefault();
    $('#slider .panel').animate({marginLeft : -1200}, 1000);
});
*/