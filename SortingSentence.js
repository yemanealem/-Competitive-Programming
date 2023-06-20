var sortSentence = function (s) {                             
    const map = {};                                           

    const WORD_NUMS = s.split(" "); 
     console.log(WORD_NUMS)                          
    for (let wordNum of WORD_NUMS) {   
        console.log(wordNum)                      
        const word = wordNum.slice(0, wordNum.length - 1);   
        const num = wordNum.slice(wordNum.length - 1);        
        map[num] = word;                                      
    }

    console.log(map)
    const ans = [];
    for (let num = 1; num <= WORD_NUMS.length; num++) {       
        ans.push(map[num]);                                   
    }
    return ans.join(" ");                                     // 'one two'
};

console.log(sortSentence('This1 sentence4 is2 a3'))