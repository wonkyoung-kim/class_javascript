/*
DOM탐색
- 부모탐색 : DOM.parentElement (단수)
- 자손 모두 탐색 : DOM.querySelector (단수, 복수)
- 자식 탐색 : DOM.children (복수)
- 형제요소중 다음요소 탐색 : DOM.nextElementSibling;
- 형제요소중 이전요소 탐색 : DOM.previousElementSibling;
- 부모뿐만이 아닌 제일 가까운 직계 조상 탐색 : DOM.closest('요소명');
*/

var btns = document.querySelectorAll('ul li a');

for(let i=0; i<btns.length; i++) {
    btns[i].addEventListener('click', function(e){
        e.preventDefault();

         //var el = e.currentTarget.parentElement.parentElement;
        //  var el = e.currentTarget.closest('ul');
        //  el.style.border = '1px solid red';
        var el = e.currentTarget.closest('ul').querySelectorAll('a')[2];
        console.log(el);
    })
}

// 2번쨰 li의 자식인 a태그를 클릭했을 때 3번째 li의 자식요소 a를 탐색