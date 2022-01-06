/*
//template literals
let a="pankil";
let b="tilvani";
var fullname =`${a +" "+  b}`;
console.log(fullname);
let c=7;
let d=8;
let total=`${c + d}`;
console.log(total);
//object
const info = {
    firstname: 'pankil',
    lastname: "tilvani",
    age:21,
};
let {firstname:fn,lastname:ln}=info;
console.log(`${fn} ${ln}`);
//destructuring assignment
//array destrycturing
let fruits =["dont","know"];
let [e,g]=fruits;
console.log(e,g)
//object destructuring
let person={named:'never',sname:'mind'};
//let {named,sname}=person;
//console.log(named,sname)
//or
console.log(person.named,person.sname);*/
//object literals
function adressmaker(city,state,pincode)
{
    return {
        city,
        state,
        pincode
    }
}
console.log(adressmaker('surendranagar','gujarat','363001'));
//multiline string
var str=`            i dont know
            what i am typing
            why i am typing`;
console.log(str);
//default parameters
var funny = function (numberofJokes=10,audience=100)
{   //audience=99;
    return numberofJokes+ " jokes are enough to make laugh to " + audience +" number of audience";
}

console.log(funny());
//
let incomes = [62000, 67000, 75000];
let total = 0;

for(let i=0;i<incomes.length;i++) {
    console.log(i);
    total += incomes[i];
}

console.log(total);