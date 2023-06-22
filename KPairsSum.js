var maxOperations = function(nums, k) {
    let arr = nums.sort((a, b) => a - b)
   let left = 0;
   let right = arr.length - 1
   let count = 0

   while (left < right) {
       const sum = arr[left] + arr[right]
       if (sum < k) {
           left++
       } else if (sum > k) {
           right--
       } else {
           count++
           left++
           right--
       }
   }
   return count
};
console.log(maxOperations([1,2,3,4],5))