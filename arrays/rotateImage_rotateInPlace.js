// Rotate image 90 degrees clockwise
const rotateImage = function(matrix) {
  let len = matrix.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < Math.floor(len / 2) + len % 2; j++) {
      let temp = matrix[len - 1 - j][i];
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
      matrix[j][len - 1 - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }

  return matrix;
}

const m = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

console.log(rotateImage(m));