function solution(s, t) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) {
      let temp = s.slice(0, i) + s.slice(i + 1);
      if (t > temp) {
        ans++;
      }
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (isDigit(t[j])) {
      let temp = t.slice(0, j) + t.slice(j + 1);
      if (s < temp) {
        ans++;
      }
    }
  }

  return ans;
}

const isDigit = (c) => {
  if (c.toUpperCase() === c.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

const s = 'ab12c',
  t = 'ab24z';
console.log(solution(s, t));
// 3
