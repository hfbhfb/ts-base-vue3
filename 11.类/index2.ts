

abstract class Person{
    public name;
    public age;
    public constructor(name:string){
        this.name = name
    }
    public abstract sayHi()
}

class chiness extends Person{
    constructor(name:string){
        super(name)
        // this.name = name
    }
    public sayHi(){
        console.log('你好')
        console.log(this.name)
    }
}

let c1 = new chiness('hfb') 
c1.sayHi()


