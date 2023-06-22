var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b);
   
   let left=0;
   let max=Math.max(); 
   let curr=0;

   for(let i=0;i<nums.length;i++){
       curr+=nums[i];
   
       while((i-left+1) * nums[i] > curr+k){
           curr-=nums[left++]
       }        
       max = Math.max(max,i-left+1);
   }
   return max;
};
console.log(maxFrequency([1,2,3,4,5,6]))