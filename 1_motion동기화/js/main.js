/*
    show() : 보임 / hide() : 숨김
    fadeIn() : 서서히보임 / fadeOut() : 서서히안보임
    slideDown() : 밑으로 내리면서 보임 / slideUp() : 위로 올리면서 숨김
*/ 

var $btn1 = $('.btn1');
var $btn2 = $('.btn2');
var $wrap2 = $('.wrap2');
var $top = $('.top');
var $right = $('.right');
var $bottom = $('.bottom');
var $left = $('.left');
var $content = $('.content');
var $close1 = $('.close1');
var $close2 = $('.close2');
var speed = 2000;
var enableClick = true; //1. 처음 로딩시 해당값이 true

$btn1.on('click', function(e){
    e.preventDefault();
    var isOn = $(this).hasClass('on'); //isOn이라는 변수에 클릭한버튼의 on클래스가 있는지 찾는다.
    if(isOn) return; //isOn변수에 on클래스가있으면 함수를 종료

    //2. 처음 버튼을 클릭하면 enableClick이 true여서 조건문 함수가 일단은 호출됨
    if(enableClick) { //enableClick변수가 true라면 함수 실행
        //3. 조건문을 통과하자마자 내부의 전역변수 enableClick값이 다시 false로 변경해서
        enableClick = false; //enableClick변수는 false로 바뀜.
        //이후부터는 해당 값이 true바뀌기 전까지는 어떤 이벤트 함수로 호출불가 
        openBox1(); //openBox함수실행
    }
})
$close1.on('click', function(e){
    e.preventDefault();
    closeBox1();
})


$btn2.on('click', function(e){
    e.preventDefault();
    var isOn = $(this).hasClass('on');
    if(isOn) return;
    if(enableClick) {
        enableClick = false;
        openBox2();
    }
})
$close2.on('click', function(e){
    e.preventDefault();
    closeBox2();
})

function openBox1() {
    console.log('openBox1 start!!!');
    closeBox2();
    $btn1.addClass('on');
    $top.animate({width: '100%'}, speed, function(){
        $right.animate({height: '100%'}, speed, function(){
            $bottom.animate({width:'100%'},speed, function(){
                $left.animate({height:'100%'},speed, function(){
                    $content.fadeIn(speed, function(){
                        //4. 모든 모션이 끝난 직후 다시 전역변수 enableClick값을 true로 변경하면
                        //이제야 비로서 모든 이벤트 연결리 가능함
                        enableClick = true;
                    });
                });
            })
        });
    });
}

function closeBox1() {
    $btn1.removeClass('on');
    $content.fadeOut(speed/2, function(){
        $top.animate({width: '0%'}, speed/2);
        $right.animate({height: '0%'}, speed/2);
        $bottom.animate({width: '0%'}, speed/2);
        $left.animate({height: '0%'}, speed/2);
    });
}

function openBox2() {
    console.log('openBox2 start!!!');
    closeBox1();
    $btn2.addClass('on');
    $wrap2.animate({height: 400, marginTop : -200}, speed, function(){
        enableClick = true;
    });
}

function closeBox2() {
    $btn2.removeClass('on');
    $wrap2.animate({height: 0, marginTop : 0}, speed/2);
}