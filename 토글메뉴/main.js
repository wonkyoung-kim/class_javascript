var $frame = $('#wrap');
var $btns = $frame.find('dt');
var $boxs = $frame.find('dd');
var speed = 600;
var enableClick = true;

$btns.on('click', function(e){
    e.preventDefault();
    if(enableClick) {
        toggleOpen(this);
        enableClick = false;
    }
})

function toggleOpen(el) {
    var isOn = $(el).hasClass('on');

    $btns.removeClass('on');
    $boxs.slideUp(speed, function(){
        enableClick = true;
    });

    if(!isOn) {
        $(el).addClass('on');
        $(el).next('dd').slideDown(speed, function(){
            enableClick = true;
        });
    };
}

/* 
    slideDown() : 내리면서 보여줌
    slideUp() : 올리면서 숨김
*/