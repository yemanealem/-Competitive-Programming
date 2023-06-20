var isPalindrome = function(str) {
    var strLen = str.length;


    for(let i=0;i<=str.length/2;i++)
        {
            if(str[i]!==str[str.length-i-1])
            {
              return false
            }
           
        }
        return true

        // using recursive

    // if (strLen === 0 || strLen === 1) {
    //     return true;
    // }
    
    // if (str[0] === str[strLen - 1]) {
    //     return isPalindrome( str.slice(1, strLen - 1) );
    // }
    
    // return false;
};

console.log(isPalindrome('madam'));