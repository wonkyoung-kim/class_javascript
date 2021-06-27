/*
변수의 유효범위 (변수의 scope)
- 지역변수 : 블록안에서 선언된 변수 (해당 블록에서만 읽힘)
- 지역변수를 쓰는 이유 : 특정 코드블록 안에서만 전용으로 쓰이는 정보값을 저장
- 전역변수 : 블록밖에서 선언된 변수 (어디서든 읽힘)
- 전역변수를 쓰는 이유 : 복수개의 함수나 코드블록안에서 특정값을 공유해야될 때

호이스팅(hoisting)
- 블록안에서 선언된 지역변수값이 블록 바깥으로 강제로 끌어올라가져서 전역변수화
- 일반함수 블록이 아닌 조건문, 반복문 안쪽에 있는 지역변수는 호이스팅이 발생

함수의 종류
- 선언적 함수
- 익명 함수
- 대입형 함수
- 즉시실행 함수 : 함수를 정의하자마자 자기 자신을 즉시 실행 
- 즉시실행 함수 형태 : (함수정의부)(함수호출부);
- 즉시실행 함수를 쓰는 이유 
---이유1 : 즉시실행함수 내부의 변수값들은 캡슐화
---이유2 : 즉시실행함수 내부의 특정 값을 일괄적으로 변경
*/

/*
var btn1 = document.getElementsByTagName('li')[0];
var btn2 = document.getElementsByTagName('li')[1];
var abc;
console.log(btn1)

btn1.onclick = function(){
    abc = '지역변수';
    console.log(btn1);
    console.log(abc);
}
btn2.onclick = function(){
    console.log(abc);
}


var test = function(){
    console.log('test');
}

test();

function test(txt){
    console.log(txt);
}

test('안녕');

(function(txt){
    console.log(txt);
})('hello');

(function($){
    $('')
})(jQquery);

*/

var lists = document.getElementsByTagName('li');
console.log(lists);

//반복문 코드 블록안의 지역변수 i걊이 호이스팅이 발생해서
//실제 각 버튼마다 이벤트가 실행되면 4만 계속해서 찍히는 오류 발생
//아래 코드는 즉시실행 함수로 반복문 내부의 지역변수 i값을 캡슣화

//es5버전에서의 이벤트 연결문
for(var i=0; i<lists.length; i++) {
    (function(index){
        lists[index].onclick = function(){
            console.log(index);
        }
    })(i);
}

//es6버전에서의 이벤트 연결문
for(let i=0; i<lists.length; i++) {
    lists[i].onclick = function(){
        console.log(i);
    }
}


/*
     lists[i].onclick = function(){
        console.log(0);
    }
     lists[i].onclick = function(){
        console.log(1);
    }
     lists[i].onclick = function(){
        console.log(2);
    }
     lists[i].onclick = function(){
        console.log(3);
    }
*/