const longestSubarray = nums => {
  let deleteQuota = 1, left = 0, right = 0, maxLen = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      deleteQuota--;
    }

    if (deleteQuota >= 0) {
      maxLen = Math.max(maxLen, right - left + 1);
    } else {
      if (nums[left] === 0) {
        deleteQuota++;
      }

      left++;
    }

    right++;
  }

  return maxLen - 1;
}

const nums = [1,1,0,1];
console.log(longestSubarray(nums));
// 3
const nums2 = [0,1,1,1,0,1,1,0,1];
console.log(longestSubarray(nums2));
// 5
const nums3 = [1,1,1];
console.log(longestSubarray(nums3));
// 2
