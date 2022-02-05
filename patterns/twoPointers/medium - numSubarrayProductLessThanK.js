// this solution only works because of nums only container positive ints
const numSubarrayProductLessThanK = (nums, k) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = i;
    let product = 1;

    while (j < nums.length) {
      product *= nums[j];

      if (product < k) {
        count++;
        j++;
      } else {
        // safely break if product >= k b/c no other positive int will make the product smaller
        break;
      }
    }
  }

  return count;
}

const nums = [10,5,2,6], j = 100;
console.log(numSubarrayProductLessThanK(nums, j))
// 8
const nums2 = [1,2,3], k = 0;
console.log(numSubarrayProductLessThanK(nums2, k))
// 0
const nums3 = [10,9,10,4,3,8,3,3,6,2,10,10,9,3], l = 19;
console.log(numSubarrayProductLessThanK(nums3, l))
// 18
