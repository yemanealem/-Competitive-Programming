var checkArithmeticSubarrays = function(nums, l, r) {
    let bool = [];
    
    for(let i = 0; i < l.length; i++){
        bool.push(true);
    }
    
    for(let i = 0; i < l.length; i++){
        let arr = [];

        for(let j = l[i]; j <= r[i]; j++){
            arr.push(nums[j]);
        }

        arr.sort((a,b) => a-b);
        let diff = arr[0] - arr[1];

        for(let j = 1; j < arr.length; j++){
            if(j+1 < arr.length){
                if(arr[j] - arr[j+1] !== diff){
                    bool[i] = false;
                    break;
                }
            }
        }
        
    }
    
    return bool;
};

console.log(checkArithmeticSubarrays([4,6,5,9,3,7],[0,0,2],[2,3,5]))