const maxSubArray = (nums) => {
  let max = nums[0], curr = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (curr < 0) {
      curr = nums[i];
    } else {
      curr += nums[i];
    }
    
    max = Math.max(max, curr);
  }
  
  return max;
};

const maxSubArrayAlternative = (nums) => {
  let max = nums[0];
  let curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let n = nums[i];

    curr = Math.max(n, curr + n);
    max = Math.max(max, curr);
  }

  return max;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4];

console.log(maxSubArray(nums));
console.log(maxSubArrayAlternative(nums));