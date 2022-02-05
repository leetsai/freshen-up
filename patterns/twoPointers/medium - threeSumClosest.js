const threeSumClosest = (nums, target) => {
  let ans = Number.MAX_SAFE_INTEGER;
  const sorted = nums.sort((a,b) => a - b);
  
  for (let i = 0; i < sorted.length; i++) {
    let lo = i + 1;
    let hi = sorted.length - 1;

    while (lo < hi) {
      let sum = sorted[i] + sorted[lo] + sorted[hi];
      
      // Math.abs(target - sum) represents the closeness of sum to target
      if (Math.abs(target - sum) < Math.abs(ans)) {
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