var findKthLargest = function(nums, k) {
    nums.sort((a,b) => a - b).reverse();

    return nums[k-1];
};

console.log(findKthLargest([2,1,3,6,4,7,8,9],5))