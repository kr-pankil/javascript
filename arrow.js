/*const materials = ["hello", "world","pankil"];
  console.log(materials.map(materials => materials.length));

  let a=2,b=3;
var sum=(a,b) => a+b;
console.log(sum(a,b));
// */
//multiple arguments using rest parameter
function length(...arg)
{
    console.log(arg.reverse());
}
length("pankil","tilvani","pankiltilvani")
arr = ["pankil","tilvani","pankiltilvani"]
console.log(arr.reverse());