/*
You are implementing your own programming language and you've decided to add support for merging strings. A typical merge function would take two strings s1 and s2, and return the lexicographically smallest result that can be obtained by placing the symbols of s2 between the symbols of s1 in such a way that maintains the relative order of the characters in each string.

For example, if s1 = "super" and s2 = "tower", the result should be merge(s1, s2) = "stouperwer".
*/

function solution(s1, s2) {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (!map1.has(s1[i])) {
      map1.set(s1[i], 1);
    } else {
      map1.set(s1[i], map1.get(s1[i]) + 1);
    }
  }

  for (let j = 0; j < s2.length; j++) {
    if (!map2.has(s2[j])) {
      map2.set(s2[j], 1);
    } else {
      map2.set(s2[j], map2.get(s2[j]) + 1);
    }
  }

  let p1 = 0,
    p2 = 0;
  const ans = [];
  while (p1 < s1.length && p2 < s2.length) {
    if (map1.get(s1[p1]) < map2.get(s2[p2])) {
      ans.push(s1[p1]);
      map1.set(s1[p1], map1.get(s1[p1]) - 1);
      p1++;
    } else if (map1.get(s1[p1]) > map2.get(s2[p2])) {
      ans.push(s2[p2]);
      map2.set(s2[p2], map2.get(s2[p2]) - 1);
      p2++;
    } else {
      if (s1[p1] <= s2[p2]) {
        ans.push(s1[p1]);
        map1.set(s1[p1], map1.get(s1[p1]) - 1);
        p1++;
      } else {
        ans.push(s2[p2]);
        map2.set(s2[p2], map2.get(s2[p2]) - 1);
        p2++;
      }
    }
  }

  ans.push(s1.substring(p1), s2.substring(p2));

  return ans.join('');
}
