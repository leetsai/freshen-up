const threeSumSmaller = (nums, target) => {
  const sorted = nums.sort((a,b) => a - b);
  let ans = 0;

  for (let i = 0; i < sorted.length - 2; i++) {
    let j = i + 1;
    let k = sorted.length - 1;

    while (j < k) {
      let sum = sorted[i] + sorted[j] + sorted[k];

      if (sum < target) {
        ans += k - j;
        j++;
      } else {
        k--;
      }
    }
  }

  return ans;
}

console.log(threeSumSmaller([-2,0,1,3], 2));
// 2
console.log(threeSumSmaller([], 0));
// 0
console.log(threeSumSmaller([0], 0));
// 0
console.log(threeSumSmaller([1,2,3,5,8], 7));
// 1