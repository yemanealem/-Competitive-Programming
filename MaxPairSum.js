var minPairSum = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let max = 0;
    for(let i=0; i<nums.length/2; i++) {
        max = Math.max(max, nums[i]+nums[nums.length-1-i]);
    }
    return max;
};
console.log(minPairSum([1,2,4,5,6,7,8]))