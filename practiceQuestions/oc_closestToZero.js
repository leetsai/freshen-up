const closestToZero = (arr) => {
  arr.sort((a, b) => a - b);

  const sumMap = new Map();
  let left = 0,
    right = arr.length - 1,
    minSum = Number.MIN_SAFE_INTEGER;

  while (left < right) {
    let sum = arr[left] + arr[right];
    let absSum = Math.abs(sum);

    if (sumMap.has(absSum)) {
      sumMap.get(absSum).push([arr[left], arr[right]]);
    } else {
      sumMap.set(absSum, [[arr[left], arr[right]]]);
    }

    minSum = Math.min(absSum, Math.abs(minSum));

    if (sum >= 0) {
      right--;
    } else {
      left++;
    }
  }

  let ans = sumMap.get(minSum);

  return ans;
};

let arr = [-2, -3, 7, 4, 3, 2];
console.log(closestToZero(arr));
// [[-3, 3], [-2, 2]];

arr = [1, 2, 3, 4];
console.log(closestToZero(arr));
// [[1,2]];
