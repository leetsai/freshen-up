/*
  Given two strings, find the number of common characters between them.

  Example

  For s1 = "aabcc" and s2 = "adcaa", the output should be
  solution(s1, s2) = 3.

  Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function solution(s1, s2) {
  const m1 = new Map(),
    m2 = new Map();

  for (let s of s1) {
    if (!m1.has(s)) {
      m1.set(s, 1);
    } else {
      m1.set(s, m1.get(s) + 1);
    }
  }

  for (let s of s2) {
    if (!m2.has(s)) {
      m2.set(s, 1);
    } else {
      m2.set(s, m2.get(s) + 1);
    }
  }

  let ans = 0;
  for (let [key, value] of m1) {
    if (m2.has(key)) {
      ans += Math.min(m1.get(key), m2.get(key));
    }
  }

  return ans;
}

const s1 = 'aabcc',
  s2 = 'adcaa';
console.log(solution(s1, s2));
// 3
