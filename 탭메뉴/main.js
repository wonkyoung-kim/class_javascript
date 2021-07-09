var $wrap = $('#wrap');
var $btns = $wrap.find('.left li');
var $boxs = $wrap.find('.right > div');
var delay = convertSpeed('#wrap .right>div');
var delay2 = convertSpeed('#wrap .right>div p');
var enableClick = true;


$btns.on('click', function(e){
    e.preventDefault();

    var isOn = $(this).hasClass('on');
    if(isOn) return;
    
    if(enableClick){
        var i = $(this).index();
        activation(i);
        enableClick = false;
    }    
});

function activation(index){
    $btns.removeClass('on');
    $btns.eq(index).addClass('on');

    //박스 활성화
    $boxs.removeClass('on')
    $boxs.eq(index).addClass('on');

    //활성화된 박스 안쪽의 p활성화
    setTimeout(function(){
        $boxs.find('p').removeClass('on');
        $boxs.eq(index).find('p').addClass('on');

        setTimeout(function(){
            enableClick = true;
        },delay2);
    },delay);
}

function convertSpeed(el){
    var delay = $(el).css('transition-duration'); //0.5s
    delay = delay.split('s')[0]; //문자열 '0.5'
    delay = delay * 1000; //자동 형변환됨 '0.5' * 1000
    return delay;
}