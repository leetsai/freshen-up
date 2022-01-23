// Rotate image 90 degrees clockwise
const rotateImage = function(matrix) {
  let len = matrix.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    for (let j = 0; j < Math.floor(len / 2) + len % 2; j++) {
      // storing bottom left because we're going counter-clockwise for clockwise 90 degree rotation
      let temp = matrix[len - 1 - j][i];

      // tip for remembering i's and j's: if the row or column stays in place, give it the outter loop
      //   the converse is true: if a row or column changes, give it the inner loop
      // if starting on the right, then len - 1 - (i or j)
      // if starting on the bottom, then len - 1 - (i or j)
      // bottom left
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j];
      // bottom right
      matrix[len - 1 - i][len - 1 - j] = matrix[j][len - 1 - i];
      // top right
      matrix[j][len - 1 - i] = matrix[i][j];
      // top left
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