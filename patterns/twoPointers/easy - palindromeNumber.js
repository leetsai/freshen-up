// use extra space
const isPalindromeExtraSpace = x => {
  if (x < 0) return false;

  // get each digit into an array
  // then use two pointers

  const arr = [];

  while (x >= 10) {
    arr.push(x % 10);
    x = Math.floor(x / 10);
  }

  arr.push(x);

  let i = 0, j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

const isPalindrome = x => {
  if (x < 0) return false;

  let i = 1;
  
  let j = 0;
  let y = x;
  // find out digits
  while (y >= 10) {
    y = Math.floor(y / 10);
    j++;
  }

  // two pointers: compare units digit with largest digit
  while (j >= 1) {
    if (x % 10 !== Math.floor(x / Math.pow(10, j))) {
      return false;
    }

    // shave off max digit
    x = x - (Math.pow(10,j) * Math.floor(x / Math.pow(10, j)));
    // shave off units digit
    x = Math.floor(x / 10);

    j-=2;
  }

  return true;
}

const x = 12321;
const y = -121;
const z = 10;
const w = 2222;

console.log(isPalindromeExtraSpace(x));
// true;

console.log(isPalindromeExtraSpace(y));
// false;

console.log(isPalindromeExtraSpace(z));
// false;

console.log(isPalindromeExtraSpace(w));
// true;

console.log(isPalindrome(x));
// true;

console.log(isPalindrome(y));
// false;

console.log(isPalindrome(z));
// // false;

console.log(isPalindrome(w));
// // true;