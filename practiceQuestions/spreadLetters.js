/*
  You are given an array of strings arr. Your task is to construct a string from the words in arr, starting with the 0th character from each word (in the order they appear in arr), followed by the 1st character, then the 2nd character, etc. If one of the words doesn't have an ith character, skip that word.

  Return the resulting string.

  Example

  For arr = ["Daisy", "Rose", "Hyacinth", "Poppy"], the output should be solution(arr) = "DRHPaoyoisapsecpyiynth".

  First, we append all 0th characters and obtain string "DRHP";
  Then we append all 1st characters and obtain string "DRHPaoyo";
  Then we append all 2nd characters and obtain string "DRHPaoyoisap";
  Then we append all 3rd characters and obtain string "DRHPaoyoisapaecp";
  Then we append all 4th characters and obtain string "DRHPaoyoisapaecpyiy";
  Finally, only letters in the arr[2] are left, so we append the rest characters and get "DRHPaoyoisapaecpyiynth";

====

  For arr = ["E", "M", "I", "L", "Y"], the output should be solution(arr) = "EMILY".

  Since each of these strings have only one character, the answer will be concatenation of each string in order, so the answer is EMILY.
*/

function solution(arr) {
  let ans = [];
  let maxStringLength = 0;
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    // this will tell us how many cycles to go
    maxStringLength = Math.max(arr[i].length, maxStringLength);

    // prepare the strings for array's shift method
    temp.push(arr[i].split(''));
  }

  while (maxStringLength > 0) {
    for (let i = 0; i < arr.length; i++) {
      ans.push(temp[i].shift());
    }

    maxStringLength--;
  }

  return ans.join('');
}

let arr = ['Daisy', 'Rose', 'Hyacinth', 'Poppy'];
console.log(solution(arr));
// "DRHPaoyoisapsecpyiynth"

arr = ['E', 'M', 'I', 'L', 'Y'];
console.log(solution(arr));
// "EMILY"