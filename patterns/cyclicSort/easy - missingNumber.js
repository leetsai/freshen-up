const missingNumber = nums => {
  let i = 0;

  // starting at 0, each number tell you where they belong!
  while (i < nums.length) {
    let correct = nums[i];

    if (nums[i] !== nums[correct]) {
      swap(nums, i, correct);
    } else {
      i++;
    }
  }

  let j = 0;

  // j acts as a counter and tells us where things are off sync!
  while (j <= nums.length) {
    if (j !== nums[j]) {
      break;
    }

    j++;
  }

  return j;
}

const swap = (nums, i, correct) => {
  let temp = nums[i];

  nums[i] = nums[correct];
  nums[correct] = temp;
}

const nums = [3,0,1];
console.log(missingNumber(nums));
// 2
const nums2 = [0,1];
console.log(missingNumber(nums2));
// 2
const nums3 = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums3));
// 8