const moveZeroes = function(nums) {
  let zeroCount = 0;
  let insertIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else {
      nums[insertIndex] = nums[i];
      insertIndex++;
    }
  }

  while (zeroCount > 0) {
    nums[nums.length - zeroCount] = 0;
    zeroCount--;
  }

  return nums;
}

const nums = [0,1,0,3,12];
// [1,3,12,0,0]