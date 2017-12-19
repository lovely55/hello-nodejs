var person={
    name:'Luna',

    handleMessage:function(message,handler){
        handler(message)
    },

    greet:function(){
        var _this = this
        this.handleMessage('Hi,',function(message){
            console.warn(message+_this.name)
        })
    }
}

person.greet()

var person={
    name:'Luna1',

    handleMessage:function(message,handler){
        handler(message)
    },

    greet:function(){
        this.handleMessage('Hi,',(message)=> console.warn(message+ this.name))
    }
}

person.greet()
