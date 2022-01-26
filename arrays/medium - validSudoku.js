const isValidSudoku = (grid) => {
  const hSet = [...Array(grid.length)].map(() => new Set());
  const vSet = [...Array(grid.length)].map(() => new Set());
  const boxSet = [...Array(grid.length)].map(() => new Set());

  for (let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      const curr = grid[i][j];

      if (curr === ".") continue;

      if (hSet[i].has(curr)) return false;
      hSet[i].add(curr);
      
      if (vSet[j].has(curr)) return false;
      vSet[j].add(curr);
      
      const idx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxSet[idx].has(curr)) return false;
      boxSet[idx].add(curr);
    }
  }

  return true;
}