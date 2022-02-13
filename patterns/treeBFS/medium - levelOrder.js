const levelOrder = root => {
  const queue = [root];
  const ans = [];

  if (root === null) {
    return ans;
  }

  while (queue.length !== 0) {
    let size = queue.length;
    let currentLevel = [];
    
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

    ans.push(currentLevel);
  }

  return ans;
}

const root = [3,9,20,null,null,15,7];
console.log(levelOrder(root));
// [[3],[9,20],[15,7]]
const root1 = [1];
console.log(levelOrder(root1));
// [[1]]
const root2 = [];
console.log(levelOrder(root2));
// []