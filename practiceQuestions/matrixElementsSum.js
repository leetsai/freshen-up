/*
  After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

  Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).
*/

const solution = (matrix) => {
  let sum = 0,
    i = 0,
    j = 0;
  while (j < matrix[i].length) {
    sum += matrix[i][j];
    // we skip when either ij is 0 or we've reached the lowest level
    if (matrix[i][j] === 0 || i === matrix.length - 1) {
      j++;
      i = 0;
      continue;
    }

    i++;
  }

  return sum;
};

const matrix = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
];
console.log(solution(matrix));
// const matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];
// console.log(solution(matrix));
// // 9
