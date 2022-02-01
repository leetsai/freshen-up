const countBinarySubstrings = (s) => {
  const arr = new Array(s.length).fill(0);

  let curr = 0;
  arr[curr] = 1;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      curr++;
      arr[curr] = 1;
    } else {
      arr[curr]++;
    }
  }

  let ans = 0;

  // Min of distinct groupings fulfill the matching substring criteria
  for (let i = 0; i < curr; i++) {
    ans += Math.min(arr[i], arr[i + 1]);
  }

  return ans;
}