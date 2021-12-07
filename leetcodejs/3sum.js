//https://leetcode.com/problems/3sum/
function check(aray1,aray2)
{
      if(JSON.stringify(aray1)===JSON.stringify(aray2))
      {
          return true;
      }
      else{
          return false;
      }
}   
function threesum(x)
{   var sum=0,arr=[];
    var first=0;
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
                    if(sum===0 && first===0)
                    {  
                       arr.push([nums[i],nums[j],nums[k]]);
                       first=1;
                    }   
                    if(first!==0 && sum===0){
                        var temp=[];
                        temp.push([nums[i],nums[j],nums[k]]);
                        if(check(arr,temp)==false)
                        {   
                            arr.push([nums[i],nums[j],nums[k]]);
                        }
                    } 
                }
            }
        }
        return arr;
    }
}

console.log(threesum([-1,0,1,2,-1,-4]));