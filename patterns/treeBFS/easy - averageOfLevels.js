const averageOfLevels = root => {
  const ans = [];
  const queue = [root];
  
  while (queue.length !== 0) {
      let size = queue.length;
      let count = 0;
      let sum = 0;
      
      for (let i = 0; i < size; i++) {
          let curr = queue.shift();
          sum += curr.val;
          count++;
          
          if (curr.left !== null) {
              queue.push(curr.left);
          }
          
          if (curr.right !== null) {
              queue.push(curr.right);
          }
      }
      
      const avg = sum / count;
      ans.push(avg);
  }
  
  return ans;
}