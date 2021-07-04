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
var speed = 500;
var enableClick = true; //1. 처음 로딩시 해당값이 true

//animate 상태변화 속성값
var box1 = {
    on: {
        top: {width: '100%'},
        right: {height: '100%'},
        bottom: {width: '100%'},
        left: {height: '100%'}
    },
    off: {
        top: {width: '0%'},
        right: {height: '0%'},
        bottom: {width: '0%'},
        left: {height: '0%'}
    }
}

var box2 = {
    on: {height: 400, marginTop : -200},
    off: {height: 0, marginTop : 0}
}

$btn1.on('click', function(e){
    e.preventDefault();
    var isOn = $(this).hasClass('on'); 
    if(isOn) return; 

    //2. 처음 버튼을 클릭하면 enableClick이 true여서 조건문 함수가 일단은 호출됨
    if(enableClick) { 
        //3. 조건문을 통과하자마자 내부의 전역변수 enableClick값이 다시 false로 변경해서
        enableClick = false; 
        //이후부터는 해당 값이 true바뀌기 전까지는 어떤 이벤트 함수로 호출불가 
        openBox1();
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
    $top.animate(box1.on.top, speed, function(){
        $right.animate(box1.on.right, speed, function(){
            $bottom.animate(box1.on.bottom,speed, function(){
                $left.animate(box1.on.left,speed, function(){
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
        $top.animate(box1.off.top, speed/2);
        $right.animate(box1.off.right, speed/2);
        $bottom.animate(box1.off.bottom, speed/2);
        $left.animate(box1.off.left, speed/2);
    });
}

function openBox2() {
    console.log('openBox2 start!!!');
    closeBox1();
    $btn2.addClass('on');
    $wrap2.animate(box2.on, speed, function(){
        enableClick = true;
    });
}

function closeBox2() {
    $btn2.removeClass('on');
    $wrap2.animate(box2.off, speed/2);
}