/*
  You are given a string s. Your task is to count the number of ways of splitting s into three non-empty parts a, b and c (s = a + b + c) in such a way that a + b, b + c and c + a are all different strings.

  NOTE: + refers to string concatenation.
*/

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length - 2; i++) {
    for (let j = i + 1; j < s.length - 1; j++) {
      let a = s.slice(0, i + 1);
      let b = s.slice(i + 1, j + 1);
      let c = s.slice(j + 1, s.length);

      if (a + b !== b + c && b + c !== c + a && a + b !== c + a) {
        count++;
      }
    }
  }

  return count;
}
