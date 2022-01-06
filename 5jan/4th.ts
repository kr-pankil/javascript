interface Iuser
{
    name:string 
    age:number
    intArr:number[]
}
class Demo1{
    firstname:string
    ageOfPerson:number
    Arr:(string | number)[]
    constructor(name:string,age:number,intArr:(string|number)[])
    {
        this.firstname=name;
        this.ageOfPerson=age;
        this.Arr=intArr;
    }
    fun():any{
        return this.firstname+this.ageOfPerson+this.Arr;
    }
    ff():any{
    const oj :Iuser ={
        name:"pankil",
        age:21,
        intArr:[2,3,4],
    }
    return oj;
}
}
var obj1:Demo1=new Demo1("pankil",21,[6,"hello"])
console.log(obj1.fun())
console.log(obj1.ff())