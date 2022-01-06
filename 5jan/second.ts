class Hello
{
    lol:string
    a:number
    constructor(name:string,age:number)
    {
        this.lol=name;
        this.a=age
    }

    world(half:string):any{
         return  this.lol+ half +" " +this.a;
    }
}
var obj = new Hello("Hello",7)
console.log(obj.world("world"))
