var $frame = $('#tab');
var $btns = $frame.find('.btns li');
var $boxs = $frame.find('.boxs div');
var class_name = 'on';
var enableClick = true;
var delay = convertSpeed($boxs);

$btns.on('click', function(e){
    e.preventDefault();

    var isOn = $(this).hasClass(class_name);
    if(isOn) return;

    if(enableClick){
        var i = $(this).index();
        
        activaction(i, $btns);
        activaction(i, $boxs);
        enableClick = false;
    }
})

function activaction(index, arr){
    arr.removeClass(class_name);
    arr.eq(index).addClass(class_name);

    setTimeout(function(){
        enableClick = true;
    }, delay);
}

function convertSpeed(item){
    var delay = item.css('transition-duration');
    delay = delay.split('s')[0] * 1000;
    return delay;
}

/*
    1.클릭된 버튼 재 이벤트 방지
    2.버튼의 transition-durationt시간을 밀리세컨드로 변환
    3.위에서 만든 시간만큼 모션중 재이벤트 방지
    4.위 코드를 이벤트+함수 형태로 분리
*/