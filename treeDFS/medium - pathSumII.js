const pathSumII = (root, targetSum) => {
  const ans = [];
  const path = [];
  dfs(root, targetSum, ans, path);

  return ans;
};

const dfs = (root, sum, ans, path) => {
  if (root === null) return;
  path.push(root.val);

  if (root.left === null && root.right === null) {
    if (root.val === sum) {
      // slice to truly create new path instead of taking reference
      ans.push(path.slice());
    }
    return;
  }
  if (root.left !== null) {
    dfs(root.left, sum - root.val, ans, path);
    path.pop();
  }

  if (root.right !== null) {
    dfs(root.right, sum - root.val, ans, path);
    path.pop();
  }
};
