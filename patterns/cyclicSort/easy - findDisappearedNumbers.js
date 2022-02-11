const findDisappearedNumbers = nums => {
  // 1. cyclic sort
  // 2. one pass to pick up answers

  let i = 0;
  const ans = [];

  while (i < nums.length) {
    let correct = nums[i] - 1;

    if (nums[i] !== nums[correct]) {
      swap(i, correct, nums);
    } else {
      i++;
    }
  }

  let j = 0;
  while (j < nums.length) {
    if (nums[j] !== j + 1) {
      // j + 1 represents the missing numbers
      ans.push(j + 1);
    }

    j++;
  }

  return ans;
}

const swap = (i, correct, nums) => {
  let temp = nums[i];
  nums[i] = nums[correct];
  nums[correct] = temp;
}

const nums = [4,3,2,7,8,2,3,1];
console.log(findDisappearedNumbers(nums));
// [5,6]
const nums2 = [1,1];
console.log(findDisappearedNumbers(nums2));
// [2]