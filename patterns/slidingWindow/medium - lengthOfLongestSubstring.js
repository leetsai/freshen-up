const lengthOfLongestSubstring = s => {
  const letterMap = new Map();

  let i = 0, j = 0;
  let maxLen = 0;

  while (j < s.length) {
    if (!letterMap.has(s[j])) {
      letterMap.set(s[j], j);
      maxLen = Math.max(maxLen, j - i + 1);
    } else {
      i = letterMap.get(s[j]) + 1;

      // loop through to wipe all letters before the first instance of duplicate seen at s[j]
      for (let [key, value] of letterMap) {
        if (value < i) {
          letterMap.delete(key);
        }
      }

      letterMap.set(s[j], j);
    }

    j++;
  }

  return maxLen;
}

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
// 3
const t = "bbbbb";
console.log(lengthOfLongestSubstring(t));
// 1
const u = "pwwkew";
console.log(lengthOfLongestSubstring(u));
// 3
const v = "tmmzuxt"; // <-- by "tmm", you seen a duplicate "m", but you have to drop "t" too!
console.log(lengthOfLongestSubstring(v));
// 5