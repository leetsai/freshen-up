const removeDuplicates = (nums) => {
    let i = 0, j = i + 1;

    // iterate j until a distinct nums[j] is found
    while(j < nums.length) {
      if (nums[i] !== nums[j]) {
        nums[++i] = nums[j];
      }

      j++;
    }

    return i + 1;
};

const nums = [0,0,1,1,1,2,2,3,3,4];
// 5 because nums = [0,1,2,3,4,_,_,_,_,_]

console.log(removeDuplicates(nums));