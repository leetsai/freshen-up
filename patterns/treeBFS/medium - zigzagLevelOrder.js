const zigzagLevelOrder = root => {
  const queue = [root];
  const ans = [];
  let isReverse = false;

  if (root === null) return ans;

  while (queue.length !== 0) {
    let size = queue.length;
    const currentLevel = [];

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

    if(isReverse) {
      currentLevel.reverse();
    }
    
    ans.push(currentLevel);

    isReverse = !isReverse;
  }

  return ans;
}