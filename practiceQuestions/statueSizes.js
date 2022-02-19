/*
  Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

  Example

  For statues = [6, 2, 3, 8], the output should be
  solution(statues) = 3.

  Ratiorg needs statues of sizes 4, 5 and 7.
*/

function solution(statues) {
  let ans = 0;

  statues.sort((a, b) => a - b);

  for (let i = 0; i < statues.length - 1; i++) {
    let delta = statues[i + 1] - statues[i];
    if (delta > 1) {
      ans += delta - 1;
    }
  }

  return ans;
}

const statues = [6, 2, 3, 8];
console.log(solution(statues));
// 3
