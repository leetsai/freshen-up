// problem explanation: https://www.geeksforgeeks.org/connect-nodes-at-same-level/
const connectLevelSiblings = (root) => {
  if (root === null) {
    return root;
  }

  const queue = [root];

  while (queue.length !== 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      let next = queue[0];

      if (i === size - 1) {
        curr.nextRight = null;
      } else {
        curr.nextRight = next;
      }

      if (curr.left !== null) {
        queue.push(curr.left);
      }

      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }
  }

  return root;
};

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = this.nextRight = null;
  }
}

root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);

connectLevelSiblings(root);

console.log(
  'Following are populated nextRight pointers in ' +
    'the tree ' +
    '(null is printed if there is no nextRight)'
);
let a = root.nextRight != null ? root.nextRight.data : null;
console.log('nextRight of ' + root.data + ' is ' + a);
// null
let b = root.left.nextRight != null ? root.left.nextRight.data : null;
console.log('nextRight of ' + root.left.data + ' is ' + b);
// 2
let c = root.right.nextRight != null ? root.right.nextRight.data : null;
console.log('nextRight of ' + root.right.data + ' is ' + c);
// null
let d = root.left.left.nextRight != null ? root.left.left.nextRight.data : null;
console.log('nextRight of ' + root.left.left.data + ' is ' + d);
// null
