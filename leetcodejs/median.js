//https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1,nums2)
{
    let arr = nums1.concat(nums2).sort(function compare(a,b){return a-b;});
    //console.log(arr);
    let n = arr.length;
    if (n % 2 != 0)
        return arr[parseInt(n / 2)];
    else
    {
        return (arr[parseInt((n - 1) / 2)] + arr[parseInt(n / 2)]) / 2.0;
    }
}
console.log(findMedianSortedArrays([3],[-2,-1]));