const sortedSquares = (nums) => {
  let left = 0, right = nums.length - 1;
  const ans = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    let square;

    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      square = nums[left];
      left++;
    } else {
      square = nums[right];
      right--;
    }

    ans[i] = square * square;
  }

  return ans;
};

const x = [-7,-3,2,3,11];
const y = [-5,-3,-2,-1];

console.log(sortedSquares(x));
// 
console.log(sortedSquares(y));
// 