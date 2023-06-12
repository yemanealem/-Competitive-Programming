const BubleSort=(a)=>
  {

   var count=0
for (let i = 0; i < a.length; i++) {
    
    for (let j = 0; j < a.length - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            let temp=a[j]
            a[j]=a[j+1]
            a[j+1]=temp
            count++
        }
    }
    
}
return [count,a[0],a[a.length-1]]
  }

console.log(BubleSort([3,4,2,7,10,8]))