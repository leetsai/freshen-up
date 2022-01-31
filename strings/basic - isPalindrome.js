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

const lcIsPalindrome = s => {
  simplifiedS = s.replace(/[^a-zA-Z0-9]/g, "");

  let i = 0, j = simplifiedS.length - 1;

  while (i < j) {
    if (simplifiedS[i].toLowerCase() !== simplifiedS[j].toLowerCase()) return false;

    i++, j--;
  }

  return true;
}

console.log(lcIsPalindrome(a));
console.log(lcIsPalindrome(aba));
console.log(lcIsPalindrome(emptyString));
console.log(lcIsPalindrome(cabba));