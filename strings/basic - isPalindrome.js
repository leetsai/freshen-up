const isPalindrome = s => {
  let i = 0, j = s.length - 1;

  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }

  return true;
}

const a = "a";
const aba = "aba";
const emptyString = "";
const cabba = "cabba";

console.log(isPalindrome(a));
console.log(isPalindrome(aba));
console.log(isPalindrome(emptyString));
console.log(isPalindrome(cabba));