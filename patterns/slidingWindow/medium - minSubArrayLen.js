// LEE! REMEMBER TO NOT SORT ON PROBLEMS ASKING FOR CONTIGUOUS SUBARRAYS!
const minSubArrayLen = (target, nums) => {
  let len = Number.MAX_SAFE_INTEGER;
  let left = 0, sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= target) {
      len = Math.min(len, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return (len > nums.length ? 0 : len);
}

const minSubArrayLenLoops = (target, nums) => {
  let len = Number.MAX_SAFE_INTEGER;

  for (let i = nums.length - 1; i >= 0; i--) {
      let j = i;
      
      let sum = 0;
      while (j >= 0) {
          sum += nums[j];
          
          if (sum >= target) {
              len = Math.min(len, i - j + 1);
              
              // minor optimization here: only positive numbers, so once a len is established, the subarrays will only get longer and the sum larger
              break;
          }
          
          j--;
      }
  }

  // we're checking for when the sum is never >= target
  return (len > nums.length ? 0 : len);
}

const target = 11, nums = [1,1,1,1,1,1,1,1];
console.log(minSubArrayLenLoops(target, nums));
console.log(minSubArrayLen(target, nums));
// 0
const target2 = 4, nums2 = [1,4,4];
console.log(minSubArrayLenLoops(target2, nums2));
console.log(minSubArrayLen(target2, nums2));
// 1
const target3 = 7, nums3 = [2,3,1,2,4,3];
console.log(minSubArrayLenLoops(target3, nums3));
console.log(minSubArrayLen(target3, nums3));
// 2
const target4 = 213, nums4 = [12,28,83,4,25,26,25,2,25,25,25,12];
console.log(minSubArrayLenLoops(target4, nums4));
console.log(minSubArrayLen(target4, nums4));
// 8
