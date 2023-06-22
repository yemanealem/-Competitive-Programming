function countingValleys(n, s) {
    let steps = s.split("");
    let valleyCount = 0;
    var currentSeaLevel = 0;
    let valleyStatus = false;
    steps.forEach(step => {
      step === 'U' ? currentSeaLevel++ : currentSeaLevel--;
        if(currentSeaLevel < 0 && !valleyStatus) {
          valleyCount++;
          valleyStatus = true
        } else if(currentSeaLevel >= 0 && valleyStatus) {
          valleyStatus= false
        }
      })
      return valleyCount;
    }

console.log(countingValleys(8, 'UDDDUDUU'))