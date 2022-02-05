// Time: O(nLog(n));
// Space: O(1);
const twoSum = (nums, target) => {
  let sorted = nums.slice().sort((a, b) => a - b);
  let left = 0, right = nums.length - 1;
  
  while (left < right) {
      let sum = sorted[left] + sorted[right];
      
      if (sum < target) {
          left++;
      } else if (sum > target) {
          right--;
      } else {
          return [nums.indexOf(sorted[left]), nums.lastIndexOf(sorted[right])];
      }
  }
};

// We can do better on time
// Time: O(n)
// Space: O(n)
const twoSumMap = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];

    if (map.has(target - curr)) {
      return [i, map.get(target - curr)];
    }

    map.set(curr, i);
  }
}

const nums = [2,7,11,15], target = 9;
const nums2 = [3,2,4], target2 = 6

console.log(twoSumMap(nums, target));
console.log(twoSumMap(nums2, target2));