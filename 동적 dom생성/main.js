/*
DOM.inerText : dom의 텍스트값을 가져오거나 변경
DOM.innerHTML : dom의 태그 구조를 가져오거나 변경
innerHTML은 기존 dom안쪽의 태그 구조를 덮어쓰기
*/

var frame = document.querySelector('section');
frame.innerText = '프레임';

var pop = document.querySelector('aside');
var pop_con = pop.innerText;
console.log(pop_con);

var article = document.querySelector('article');
var article_con = article.innerHTML;
console.log(article_con);

article.innerHTML = '<span>내용변경</span>';

var ul = document.querySelector('ul');
/*
for(var i=0; i<5; i++){
    ul.innerHTML = '<li>'+i+'</li>';
}
*/
//특정 DOM안에 반복되는 요소를 추가해야 될 때
var result = ''; //태그가 계속해서 쌓일 빈 문자열 생성

for(var i=0; i<201; i++){
    result+='<li><img src="img/pic'+i+'.jpg" /></li>';
}

console.log(result);
ul.innerHTML = result;

