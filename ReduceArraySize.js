var minSetSize = function (arr) {
    const numFreq = {};
    let count = 0;
    for (let i = 0; i < arr.length; i++) numFreq[arr[i]] ? numFreq[arr[i]]++ : (numFreq[arr[i]] = 1);
  
    const sortedIntegerFeq = Object.values(numFreq).sort((a, b) => b - a);
  
    for (let i = 0; i < sortedIntegerFeq.length; i++) {
      count += sortedIntegerFeq[i];
      if (count >= arr.length / 2) return i + 1;
    }
  };
  console.log(minSetSize([1,2,3,4,5,5,5,6,7,8,9]))