const lengthOfLongestSubstringKDistinct = (s, k) => {
  const letterSet = new Set();
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let j = i;

    while (j < s.length) {
      if (!letterSet.has(s[j])) {
        letterSet.add(s[j]);
      }

      if (letterSet.size <= k) {
        maxLen = Math.max(maxLen, j - i + 1);
      } else {
        letterSet.delete(s[i]);
        break;
      }

      j++;
    }
  }

  return maxLen;
}

const s = "eceba", k = 2;
console.log(lengthOfLongestSubstringKDistinct(s, k));
// 3
const s2 = "aa", k2 = 1;
console.log(lengthOfLongestSubstringKDistinct(s2, k2));
// 2