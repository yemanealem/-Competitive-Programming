var largestNumber = function(nums) {
    var res = nums.sort(function (a, b) {
      var str1 = '' + a + b;
      var str2 = '' + b + a;
      if (str1 === str2) return 0;
      return str1 > str2 ? -1 : 1;
    }).join('');
    return res[0] === '0' ? '0' : res;
  };

  console.log(largestNumber([1,2,3,4,5,6,9]))