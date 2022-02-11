// Not quite a cyclic "sort" type of problem, BUT we're
// relying on the fact that:
// 1) array of n elements
// 2) elements between 1...n
const findAllDuplicates = nums => {
  const ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0) {
      ans.push(Math.abs(nums[i]));
    } else {
      nums[Math.abs(nums[i]) - 1] *= -1;
    }
  }

  return ans;
}

const nums = [4,3,2,7,8,2,3,1];
console.log(findAllDuplicates(nums));
// [2,3]
const nums2 = [1,1,2];
console.log(findAllDuplicates(nums2));
// [1]
const nums3 = [1];
console.log(findAllDuplicates(nums3));
// []