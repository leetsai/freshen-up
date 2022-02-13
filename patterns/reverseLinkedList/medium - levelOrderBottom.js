const levelOrderBottom = root => {
  const ans = [];
  const queue = [root];

  if (root === null) {
    return ans;
  }

  while (queue.length !== 0) {
    const currentLevel = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();

      currentLevel.push(curr.val);

      if (curr.left !== null) {
        queue.push(curr.left);
      }

      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }

    ans.unshift(currentLevel);
  }

  return ans;
}

const root = [3,9,20,null,null,15,7];
console.log(levelOrderBottom(root));
// [[15,7],[9,20],[3]]
const root = [1];
console.log(levelOrderBottom(root));
// [[1]]
const root = [];
console.log(levelOrderBottom(root));
// []