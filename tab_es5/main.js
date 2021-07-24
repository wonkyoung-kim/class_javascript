function Tab(selector){
    this.init(selector);
    this.bindingEvent();    
}

Tab.prototype.init = function(selector){
    this.frame = $(selector);
    this.btns = this.frame.find("li");
    this.boxs = this.frame.find("div");
    this.active = "on";
}

Tab.prototype.bindingEvent = function(){
    this.btns.on("click",function(e){
        e.preventDefault();    
        this.activation(e.currentTarget);    
    }.bind(this));
}

Tab.prototype.activation = function(el){    
    var i = $(el).index();

    this.btns.removeClass(this.active);
    this.btns.eq(i).addClass(this.active);

    this.boxs.removeClass(this.active);
    this.boxs.eq(i).addClass(this.active);
}







