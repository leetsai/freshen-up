const waysToSplit = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }

  let sum = arr[arr.length - 1],
    avg = sum / 3;
  let ans = 0;
  if (sum === 0) {
    return arr.length + 1;
  }
  for (let i = 0, j = 1, k = 1; arr[i] <= average; i++) {
    while (arr[j] - arr[i] < arr[j] / 2) {
      j++;
    }
    if (i === j) {
      j++;
    }
    while (sum - arr[k] >= arr[k] - arr[i] && k < arr.length - 1) {
      k++;
    }
    ans += k - j;
  }
  return ans;
};
