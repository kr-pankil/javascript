class Solution{
    n:number[];
    t:number;
    constructor(nums:number[],target:number)
    {
        this.n=nums;
        this.t=target;
    }
    search():number{
        for(var i=0;i<this.n.length;i++)
        { if(this.t==this.n[i])
            {
                return i;
            }
        else if(i==this.n.length-1 && this.n[i]!=this.t) 
            {
                this.n.push(this.t);
                console.log(this.n.sort((n1,n2)=>n1-n2));
                return this.n.indexOf(this.t);
            }
        }
    }
}
var ans :Solution = new Solution([1,3,5,6],2)
console.log(ans.search());