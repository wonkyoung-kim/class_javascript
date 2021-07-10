/*
    focus event
    -- 상호작용이 가능한 콘텐츠에만 포커스 이벤트 연결가능
    -- (input, a, button)
    -- focusin : 포커스가 들어갔을 때
    -- focusuout : 포커스가 떠났을 때
*/


var $tab = $('#tab');
var $btns = $tab.find('dt a');
var $boxs = $tab.find('dd');

$btns.on('click focusin', function(e){
    e.preventDefault();

    var isOn = $(this).hasClass('on');
    if(isOn) return;

    activation(this);
})

function activation(el){
    var target = $(el).attr('href');

    $boxs.hide();
    $(target).show();

    $btns.removeClass('on');
    $(el).addClass('on');
}