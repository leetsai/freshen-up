const threeSum = nums => {
  const sorted = nums.sort((a,b) => a - b);
  const ans = [];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[0] > 0) break;
    if (sorted[i] === sorted[i - 1]) continue;

    let lo = i + 1;
    let hi = sorted.length - 1;

    while (lo < hi) {
      let target = -sorted[i];
      let pair = sorted[lo] + sorted[hi];

      if (target > pair) {
        lo++;
      } else if (target < pair) {
        hi--;
      } else {
        ans.push([sorted[i], sorted[lo], sorted[hi]]);
        lo++;
        hi--
        
        while (sorted[lo] === sorted[lo - 1]) {
          lo++;
        }
      }
    }
  }

  return ans;
};

const sample = [-1,0,1,2,-1,-4];
const sample2 = [-1,0,1,2,-1,-4,-2,-3,3,0,4];

console.log(threeSum(sample));
// [[-1,-1,2],[-1,0,1]]
console.log(threeSum(sample2));
// [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]