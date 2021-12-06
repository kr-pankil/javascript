/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let arr = s.trim();
     splitStr=arr.split(" ");
    return splitStr.pop().length;
 };