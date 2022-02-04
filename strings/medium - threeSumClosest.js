const threeSumClosest = (nums, target) => {
  let ans = Number.MAX_SAFE_INTEGER;
  const sorted = nums.sort((a,b) => a - b);
  
  for (let i = 0; i < sorted.length; i++) {
    let lo = i + 1;
    let hi = sorted.length - 1;

    while (lo < hi) {
      let sum = sorted[i] + sorted[lo] + sorted[hi];
      
      if (Math.abs(sum - target) < Math.abs(ans)) {
        ans = target - sum;
      }

      if (sum < target) {
        lo++;
      } else {
        hi--;
      }
      
      if (target - sum === 0) break;
    }
  }

  return target - ans;
}