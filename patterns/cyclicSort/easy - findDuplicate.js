// this implementation modifies the original array
// it's "easy" compared to leetcode's medium
// which has a O(1) space constraint
const findDuplicate = nums => {
  let i = 0;

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
      return nums[j];
    }

    j++;
  }

  return null;
}

const swap = (i, correct, nums) => {
  let temp = nums[i];
  nums[i] = nums[correct];
  nums[correct] = temp;
}

const findDuplicateConstantSpace = nums => {
  // slow and fast pointer time

  let slow = nums[0], fast = nums[0];

  while (fast !== undefined && nums[fast] !== undefined) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    
    if (slow === fast) {
      break;
    }
  }

  let newSlow = nums[0];
  while(newSlow !== slow) {
    newSlow = nums[newSlow];
    slow = nums[slow];
  }

  return slow;
}

const nums = [1,3,4,2,2];
console.log(findDuplicate(nums));
console.log(findDuplicateConstantSpace(nums));
// 2
const nums2 = [3,1,3,4,2];
console.log(findDuplicate(nums2));
console.log(findDuplicateConstantSpace(nums2));
// 3