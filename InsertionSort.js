const InsertionSort=(a)=> {
    for(let i=1;i<a.length;i++)
    {
     let valuToinsert=a[i]
     let holePosition=i
     while(holePosition>0 && a[holePosition-1]>valuToinsert)
       {
        a[holePosition]=a[holePosition-1]
         
  
         holePosition--
         console.log(...a)
      }
      
    
 
       if(holePosition!=i)
        {
         a[holePosition]=valuToinsert
        }
 
    }   
   console.log(...a)
 
}

console.log(InsertionSort([2,5,3,6,9,10,1,12]))



