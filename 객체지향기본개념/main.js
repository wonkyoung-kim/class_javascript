/* 
    생성자함수(constructor)
    : 인스턴스(객체)라는 복사본을 생성하기 위한 특별한 함수

    프로토타입 (prototype)
    : 생성자함수 생성시 자동으로 만들어지는 공통의 저장 공간
    : 같은 생성자로 복사가된 모든 인스턴스들은 해당 프로토타입을 공유

    생성자함수 안쪽에서의 this
    : 해당 생성자로 추후 복사가 될 각각의 인스턴스를 지칭

    생성자함수 안쪽에서 this값이 인스턴스가 아닌 다른 값을 참조하는 경우
    - 이벤트문 안쪽에서의 this --> 이벤트가 발생한 대상을 지칭
    - each문 안에서의 this --> 반복을 돌고 있는 대상을 지칭
    - ajax문 안에서의 this --> 반환된 데이터값을 지칭
    - setTimeout안에서의 this --> window객체를 지칭
*/

/*
var box1 = $('.box1');
var box2 = $('.box2');
var box3 = $('.box3');

box1.on('click', function(){
    console.log('you clicked')
})
box2.on('click', function(){
    console.log('you clicked')
})
box3.on('click', function(){
    console.log('you clicked')
})
*/

//인스턴스를 생성하기 위한 생성자 함수정의.
function Box(el){    
    //인수로 전달받은 문자를 제이쿼리 선택자로 감싸서 인스턴스 this에 selector키를 만들어서 전달.
    this.selector = $(el);

    //인스턴스로 전달된 선택자에 클릭이벤트 연결
    this.selector.on('click', function(){
        //생성자의 프로토타입에 등록되어 있는 changeBg함수 호출
        this.changeBg();
    //해당 이벤트문 안쪽의 this값을 함수외부에서 인스턴스 this로 고정
    }.bind(this));
}

//Box생성자의 prototype공간에 앞으로 모든 인스턴스들이 공유하면서 호출할 changeBg함수 등록
Box.prototype.changeBg = function(){
    this.selector.css({backgroundColor : 'aqua'});
}

//Box생성자로부터 인스턴스 3개를 복사해서 기능 활성화
new Box('.box1');
new Box('.box2');
new Box('.box3');