//https://leetcode.com/problems/3sum/
function threesum(x)
{   var sum=0,arr=[];
    if(x.length<3)
    {
        return x;
    }
    else{
        var nums = x.sort(function compare(a,b){return a-b});
        for(let i=0;i<nums.length;i++)
        {
            for(let j=i+1;j<nums.length;j++)
            {
                for(let k=j+1;k<nums.length;k++)
                {
                    sum=nums[i]+nums[j]+nums[k];
                    if(sum==0 && )
                    {  
                       arr.push([nums[i],nums[j],nums[k]]);
                    }    
                }
            }
        }
        return arr;
    }
}

console.log(threesum([-1,0,1,2,-1,-4]));