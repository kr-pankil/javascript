//https://leetcode.com/problems/merge-sorted-array/
function merge( nums1,m,nums2,n){
    nums1.splice(m, nums1.length-m);
    for(let i=0;i<nums2.length;i++)
    {
            nums1.push(nums2[i]);
    }
   nums1.sort(function compare(a, b){return a - b});
   return nums1;
}
console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));