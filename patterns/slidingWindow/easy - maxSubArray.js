const maxSubArray = function(nums) {
  // max has to be minimal and not 0, because negative numbers are in play
  let max = Number.MIN_SAFE_INTEGER;
  let currSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = nums[i];
    } else {
      currSum += nums[i];
    }

    max = Math.max(max, currSum);
  }

  return max;
}

const nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
// 6

const nums2 = [1];
console.log(maxSubArray(nums2));
// 1

const nums4 = [-1];
console.log(maxSubArray(nums4));
// -1

const nums3 = [5,4,-1,7,8];
console.log(maxSubArray(nums3));
// 23