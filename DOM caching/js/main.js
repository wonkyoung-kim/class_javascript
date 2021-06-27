/* 
DOM Caching
: 처음 브라우저 로딩시 자주사용하는 DOM을 미리 전역변수에 할당
: 한번 변수에 할당된 DOM은 호출할 때 마다 매번 DOM을 탐색하는게 아닌
할당된 값을 재사용
*/
var $btns = $('.btns li a');

$btns.on('click', function(e){
    e.preventDefault();
    var i = $(this).parent().index();
    // console.log(i)
    $btns.css({'color':''});
    $btns.eq(i).css({'color':'hotpink'});
})