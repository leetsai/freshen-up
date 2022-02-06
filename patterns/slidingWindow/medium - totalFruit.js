const totalFruit = fruits => {
  const fruitMap = new Map();
  let maxFruit = 0;
  let i = 0;
  let j = 0;

  while (j < fruits.length) {
    if(fruitMap.size <= 2) {
      fruitMap.set(fruits[j], j);
      j++;
    } 
    
    if (fruitMap.size > 2) {
      let min = fruits.length - 1;
      // cut out the fruit type with min index: e.g. [1,2,1,3,4];
      // at j = 3, we would kick out 2 at index 1, and keep 1 at index 2
      for (let [key, value] of fruitMap) {
        min = Math.min(min, value);
      }

      i = min + 1;
      // min is the index, so fruits[min] helps identify which fruit to remove from map
      fruitMap.delete(fruits[min]);
    }

    maxFruit = Math.max(maxFruit, j - i);
  }
  
  return maxFruit;
};

const fruits = [1,2,1];
console.log(totalFruit(fruits));
// 3
const fruits2 = [0,1,2,2];
console.log(totalFruit(fruits2));
// 3
const fruits3 = [1,2,3,2,2];
console.log(totalFruit(fruits3));
// 4
const fruits4 = [3,3,3,1,2,1,1,2,3,3,4];
console.log(totalFruit(fruits4));
// 5
const fruits5 = [1,0,1,4,1,4,1,2,3];
console.log(totalFruit(fruits5));
// 5