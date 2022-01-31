const validPalindrome = s => {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return isPalindrome(s, i + 1, j) || isPalindrome(s, i, j - 1);
    }

    i++, j--;
  }

  return true;
}

const isPalindrome = (s, i, j) => {
  while (i < j) {
    if (s[i] !== s[j]) return false;

    i++, j--;
  }

  return true;
}

const x = "aba";
const y = "abca"
const z = "abc"

console.log(validPalindrome(x));
// true

console.log(validPalindrome(y));
// true

console.log(validPalindrome(z));
// false