function Rearrange(arr, N)
{

	// Iterating for array
	for (var i = 1; i < (N - 1); i++) {

		// Checking whether the element i
		// is mean of i-1 and i+1
		if ((arr[i - 1] + arr[i + 1]) / 2 == arr[i]) {

			// Rearrange by swapping arr[i] and arr[i+1]
			
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
		}
	}

	return arr

}

// Driver code
var arr = [ 6, 9, 12, 25, 50, 75 ];
var N = arr.length;

// calling the function
console.log(Rearrange(arr, N));
	

