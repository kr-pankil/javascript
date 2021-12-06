/*const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);
//or
const lett = new Set();
const a = "a";
const b = "b";
lett.add(a);
lett.add(b);
console.log(lett);*/
//for each 
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value;
})
console.log(text);
console.log(letters.values());
