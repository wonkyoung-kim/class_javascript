//생성자함수
class Tab {
    constructor(selector){
        this.init(selector);
        this.bindingEvent();
    }

    init(selector){
        this.frame = $(selector)
        this.$btn = this.frame.find('li');
        this.$box = this.frame.find('div');
        this.active = 'on';
    }

    bindingEvent(){
        this.$btn.on('click', e=>{
            e.preventDefault();
            //함수 외부에서 bind(this)로
            //해당 이벤트문 안쪽의 모든 this값을 인스턴스로 변경하고 있기 때문에
            //activation의 인수값으로 this가 아닌 e.currentTarget값을 전달
            this.activation(e.currentTarget);
        });
    }

    activation(el){
        var i = $(el).index();
    
        this.$btn.removeClass(this.active);
        this.$btn.eq(i).addClass(this.active);
    
        this.$box.removeClass(this.active);
        this.$box.eq(i).addClass(this.active);
    }
}







// new Tab('#tab');