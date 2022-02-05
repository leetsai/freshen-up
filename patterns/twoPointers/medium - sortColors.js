// aka Dutch National Flag problem: https://en.wikipedia.org/wiki/Dutch_national_flag_problem
/*  
  The Dutch national flag problem is a computer science programming problem proposed by Edsger Dijkstra.
  The flag of the Netherlands consists of three colors: red, white, and blue. Given balls of these three colors 
  arranged randomly in a line (it does not matter how many balls there are), the task is to arrange them such 
  that all balls of the same color are together and their collective color groups are in the correct order.
*/

// Solution walk through https://www.youtube.com/watch?v=sEQk8xgjx64
const sortColors = (nums) => {
  let left = 0, mid = 0, right = nums.length - 1;

  while (mid <= right) {
    if (nums[mid] === 0) {
      [nums[left], nums[mid]] = [nums[mid], nums[left]];
      left++, mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      right--;
    } else {
      mid++;
    }
  }

  return nums;
};

const sortColorsNaive = (nums) => {
  const arr = new Array(3).fill(0);

  for (let i = 0; i < nums.length; i++) {
    arr[nums[i]]++;
  }

  let idx = 0;
  for (let j = 0; j < arr.length; j++) {
    while (arr[j] > 0) {
      nums[idx] = j;
      idx++;
      arr[j]--;
    }
  }

  return nums;
};

const nums = [2,0,2,1,1,0];
console.log(sortColors(nums));
console.log(sortColorsNaive(nums));
// [0,0,1,1,2,2]

const nums2 = [2,0,1];
console.log(sortColors(nums2));
console.log(sortColorsNaive(nums2));
// [0,1,2]