//https://leetcode.com/problems/valid-parentheses/

function isValid(s){
    let stack = [];
    for(let char of s){
        if(char==='(' || char==='{' || char==='['){
            stack.push(char);
        } else if(stack.length && char===')' && stack[stack.length-1]==='('){
            stack.pop()
        } else if(stack.length && char==='}' && stack[stack.length-1]==='{'){
            stack.pop()
        } else if(stack.length && char===']' && stack[stack.length-1]==='['){
            stack.pop()
        } else{
            return false;
        }
    }
    if(stack.length===0)
    {
        return true;
    }
};
console.log(isValid("()[]{}"));
console.log(isValid("(]"));