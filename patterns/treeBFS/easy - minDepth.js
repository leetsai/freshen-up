const minDepth = (root) => {
  const queue = [root];
  let depth = 0;

  if (root === null) {
    return depth;
  }

  if (root.left === null && root.right === null) {
    return 1;
  }

  while (queue.length !== 0) {
    let size = queue.length;
    depth++;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();

      // insight: if curr.left and curr.right is null, then we've found a leaf
      // first encounter with a leaf IS going to be at minimal depth
      if (curr.left === null && curr.right === null) {
        return depth;
      }

      if (curr.left !== null) {
        queue.push(curr.left);
      }

      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }
  }

  return depth;
};
