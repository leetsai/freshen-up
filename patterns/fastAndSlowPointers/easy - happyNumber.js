const isHappy = n => {
  const nSet = new Set();

  while (!nSet.has(n)) {
    nSet.add(n);
      
    if (n == 1) {
      return true;
    }
   
    n = getHappy(n);
  }
  
  return false;
};

const getHappy = n => {
  let sum = 0;
  
  while (n >= 10) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
  }
  
  sum += Math.pow(n, 2);
  
  return sum;
}

const isHappyAlternative = n => {
  let tortoise = n, hare = getHappy(n);
  
  while (hare !== 1 && getHappy(hare) !== 1) {
    // if we find a cycle, then we're not getting to 1 in this while loop
    if (tortoise === hare) return false;
    
    tortoise = getHappy(tortoise);
    hare = getHappy(getHappy(hare));
  }
  
  // if we broke out of that loop and made it here, we hit 1
  return true;
}
  
const m = 19;
console.log(isHappy(m));
console.log(isHappyAlternative(m));
// true
const n = 2;
console.log(isHappy(n));
console.log(isHappyAlternative(n));
// false