var frame = document.querySelector('article');
var result = '';
var num = 200;

//총 200개의 이미지 태그를 문자열로 형태로 반복하면서 쌓아놓음
for(var i=0; i<200; i++){
    result+= '<img src="img/pic'+i+'.jpg">';
}
// console.log(result);

//article안쪽에 200개의 태그문자열 대입해서 DOM생성
frame.innerHTML = result;

var imgs = frame.querySelectorAll('img');
console.log(imgs);

//브라우저에 마우스무브 이벤트 연결
window.addEventListener('mousemove', function(e){
    var x = e.pageX;
    // console.log(x);
    var total = window.innerWidth;
    // console.log(total);
    var percent = (x/total)*200;
    
    percent = parseInt(percent); //실수값을 소수점이하를 버리고 정수로 변환
    console.log(percent);
    // percent : 0~199까지의 정수값

    //특정 요소만 활성화 시키기 직전에 나머지 모든 요소들을 비활성화
    for(var i=0; i<imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    
    //percent순번에 해당하는 요소만 활성화
    imgs[percent].style.display = 'block';
});

//이백분율 구하는 공식
//(현재수치값 / 전체수치값) * 200