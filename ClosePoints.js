function pClosest(pts,k)
{
    let n = pts.length;
    let distance = new Array(n);
    var closePints=[]
    for(let i = 0; i < n; i++)
    {
        let x = pts[i][0], y = pts[i][1];
        distance[i] = (x * x) + (y * y);
    }
  
    distance.sort(function(a,b){return a-b;});
      
    // Find the k-th distance
    let distk = distance[k - 1];
  
    // Print all distances which are
    // smaller than k-th distance
    for(let i = 0; i < n; i++)
    {
        let x = pts[i][0], y = pts[i][1];
        let dist = (x * x) + (y * y);
          
        if (dist <= distk)
           {
            let cpont=[x,y]
            closePints.push(cpont)
           }
         
    }
    return closePints
}
 
// Driver code
let points = [[3, 3], [5, -1], [-2, 4]];
let K = 2;
console.log(pClosest(points, K))