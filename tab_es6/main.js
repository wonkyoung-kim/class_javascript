class Tab {
    constructor(selector){
        this.init(selector);
        this.bindingEvent();  
    }

    init(selector){
        this.frame = $(selector);
        this.btns = this.frame.find("li");
        this.boxs = this.frame.find("div");
        this.active = "on";
    }

    bindingEvent(){
        this.btns.on("click",function(e){
            e.preventDefault();    
            this.activation(e.currentTarget);    
        }.bind(this));
    }

    activation(el){    
        var i = $(el).index();
    
        this.btns.removeClass(this.active);
        this.btns.eq(i).addClass(this.active);
    
        this.boxs.removeClass(this.active);
        this.boxs.eq(i).addClass(this.active);
    }
}













