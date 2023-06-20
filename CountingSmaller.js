smallerNumbersThanCurrent = function(nums) {
    let final=[];
    for(let i=0;i<nums.length;i++){
        let count =0;
        let j=0;
        while(j<nums.length){
            if(nums[i]>nums[j]){
                count++;
                j++;
            }
            else{
                j++;
            }
        }
        final.push(count);
    }
    return final;
}
console.log(smallerNumbersThanCurrent([1,2,3,3,4,5,6,9]))