// Rotate image 90 degrees clockwise
const rotateImage = function(matrix) {
  let len = matrix.length;

  // Step 1: transpose 
  for (let i = 0; i < len; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      let temp = matrix[i][j];

      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: reverse
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len / 2; j++) {
      let temp = matrix[i][j];
      
      matrix[i][j] = matrix[i][len - 1 - j];
      matrix[i][len - 1 - j] = temp;
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