var merge = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0])
    console.log(intervals)
    let result=[[intervals[0][0],intervals[0][1]]]
    for(let i=1;i<intervals.length;i++)
       {
        if(intervals[i][0]<=result[result.length-1][1])
          {
       result[result.length-1][1]=Math.max(result[result.length-1][1],intervals[i][1])
          }

         else {
            result.push(intervals[i])
         } 
       }
    return result
};
console.log(merge([[1,13],[15,18],[2,6],[8,10]]))