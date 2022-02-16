const hasPathSum = (root, targetSum) => {
  if (root === null) {
    return false;
  }

  const stack = [[root, targetSum - root.val]];

  while (stack.length !== 0) {
    let curr = stack.pop();

    if (curr[0].left !== null) {
      stack.push([curr[0].left, curr[1] - curr[0].left.val]);
    }

    if (curr[0].right !== null) {
      stack.push([curr[0].right, curr[1] - curr[0].right.val]);
    }

    if (curr[0].left === null && curr[0].right === null) {
      if (curr[1] === 0) {
        return true;
      } else {
        continue;
      }
    }
  }

  return false;
};
