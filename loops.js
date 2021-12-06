/*let num = [1,2,3,4,5];
var s=0,sum =0;
for (let i=0;i<num.length;i++)
{
    sum += num[i];
}
console.log(sum);
for(let x in num)
{
    s+=num[x];
    
}
console.log(s);
//for in loop
let num = [1,2,3,4,5];
var sum =0;
for (let x in num)
{
    sum += num[x];
}
console.log(sum);
//for of
const cars = ["BMW ", "Volvo ", "Mini "];

let text = "";
for (let x of cars) {
  text += x;
}
console.log(`${text} `);
//while loop
let num=[1,2,3,4,5];
let i=0,sum=0;
while(i<num.length)
{
    sum+=num[i];
    i++;
}
console.log(sum);  */
//do while
let num=[1,2,3,4,5];
let i=0,sum=0;
do{
    sum+=num[i];
    i++;
}
while(i==0);
console.log(sum); 
