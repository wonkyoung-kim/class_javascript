var $frame = $("#tab");
var $btns = $frame.find(".btns li");
var $boxs = $frame.find(".boxs div");
var class_name = "on";
var enableClick = true;
var delay = convertSpeed($boxs);
var ease = "easeOutBack";

//버튼 클릭시
$btns.on("click", function(e){
    e.preventDefault();

    //클릭한 버튼의 활성화 클래스가 있으면 무조건 함수 종료
    var isOn = $(this).hasClass(class_name);
    if(isOn) return;

    //현재 모션중이 아닐떄에만
    if(enableClick){
        //해당 버튼의 순번을 구해서
        var i = $(this).index();  

        //버튼과 패널 활성화 함수 호출
        activation(i, $btns);
        activation(i, $boxs); 
        //전체 프레임의 높이값 변경
        matchHT(i);
        enableClick = false;
    }       
});

//현재 활성화 박스 순번의 높이값을 구해서 프레임 높이값 변경
function matchHT(index){
    var ht = $boxs.eq(index).height();
    $frame.animate({height: ht, marginTop: -ht/2},delay,ease);
}

//버튼, 패널 활성화 함수
function activation(index, arr){
    arr.removeClass(class_name);
    arr.eq(index).addClass(class_name);    

    setTimeout(function(){
        enableClick = true;
    },delay);
}

//특정 요소의 transition-duration값을 밀리세컨드로 변환하는 함수
function convertSpeed(item){
    var delay = item.css("transition-duration");
    delay = delay.split("s")[0] * 1000;
    return delay;
}


