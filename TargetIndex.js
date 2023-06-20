var targetIndices = function(nums, target) {
    function compare(a, b) {
    return a - b;
 }
 var targetIndex=[]

 
 nums.sort(compare);
  for(let i=0;i<nums.length;i++)
   {
      if(nums[i]===target)
        {
            console.log(nums[i],i)
             var index = nums.indexOf(nums[i]);
              nums[i]='o'
             console.log(nums)
             targetIndex.push(index)
        }
   }
   return targetIndex
};

console.log(targetIndices([1,2,2,3,4,5],2))