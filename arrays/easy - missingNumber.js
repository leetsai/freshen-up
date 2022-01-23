const missingNumber = function(nums) {
  // number in range 0 to n
  // n(n + 1) / 2 = sum
  
  let partialSum = 0;
  
  for (n of nums) {
      partialSum += n;
  }
  
  let trueSum = nums.length * (nums.length + 1) / 2;
  
  return trueSum - partialSum;
};