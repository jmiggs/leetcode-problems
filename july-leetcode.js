// var arrangeCoins = function(n) {
//   // 0 1 2 3 4 5 6 7 8
//   // 0 1 2 3
  
//   let i = 0

    
//   while (n > i) {
//     console.log(n,i)
//     n -= i
//     if (n <= i) break;
//     i++

//   }
  
//   return i
// };

// console.log(arrangeCoins(8))


var prisonAfterNDays = function(cells, N) {
  let i = (N-1)%14 + 1
  
  while (i > 0) {

      let newCells = cells.slice()

      newCells[0] = 0;
      newCells[l-1] = 0;
      
      for (let j = 1; j < cells.length; j++) {
          if (cells[j-1] === cells[j+1]) {
            newCells[j] = 1
          } else {
            newCells[j] = 0
          }
      }
      cells = newCells
      i--
  }
  
  return cells
};

// let cells = [0,1,0,1,1,0,0,1]
// let n = 1000

let cells = [1,0,0,1,0,0,1,0]
let n = 1000000000


prisonAfterNDays(cells, n)