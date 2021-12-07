//https://leetcode.com/problems/reverse-integer/
function reverse(nums)
{   
    var l1 = Math.pow(2,31);
    var l2 = Math.pow(-2,31);
     var arr = nums.toString();
    var str= arr.split("");
    if(str[0]=='-')
    {   
        str.splice(0,1);
        var minus ='-';
        var ans = minus+ str.reverse().join("");
        
        if(ans < l2 )
        {
            return 0;
        }
        else
            {
                return ans;
            }
    }
    else
    {   
        var temp = str.reverse().join("");
        if(temp>l1-1)
        {
            return 0;
        }
        else
            {
                return temp;
            }
    }

    
}
console.log(reverse(1534236469));