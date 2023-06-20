// based on compiring until get smaller vallue 
//  at the end swap the smallest from the array with target(first element)
function selectionSort(arr,n){
    for (let i = 0; i < arr.length; i++) {
      let lowest = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j
        }
      }
      if (lowest !== i) {
        // Swap
        ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
      }
    }
    return arr
    }

    console.log(selectionSort([1,4,2,3,6,9]))
      
  