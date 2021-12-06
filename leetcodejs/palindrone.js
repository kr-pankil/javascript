/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str= x.toString();
    if(str.length==1)
        {
            return true;
        }
    else if(str[0]!==str[str.length-1])
        {
            return false;
        }
    else if(str===rev(str))
        {
            return true;
        }
    else
        {
            return false;
        }
}
function rev(str)
{
    return str.split("").reverse().join("");
};