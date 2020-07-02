var arrangeCoins = function(n) {
  // 0 1 2 3 4 5 6 7 8
  // 0 1 2 3
  
  let i = 0

    
  while (n > i) {
    console.log(n,i)
    n -= i
    if (n <= i) break;
    i++

  }
  
  return i
};

console.log(arrangeCoins(8))