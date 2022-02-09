const characterReplacement = (s,k) => {
  const letterMap = new Map();
  let maxLen = 0;
  let maxFreq = 0;
  let left = 0, right = 0, n = s.length;

  while (right < n) {
    // Expand the window
    letterMap.set(s[right], (letterMap.get(s[right]) ?? 0) + 1);
    maxFreq = Math.max(maxFreq, letterMap.get(s[right]));

    // Shrink the window if necessary
    if ((right - left + 1) - maxFreq > k) {
      letterMap.set(s[left], letterMap.get(s[left]) - 1);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen;
}

const s = "ABAB", k = 2;
console.log(characterReplacement(s,k));
// 4
const s2 = "AABABBA", k2 = 1;
console.log(characterReplacement(s2,k2));
// 4