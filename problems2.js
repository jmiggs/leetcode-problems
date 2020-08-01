// class MinHeap {
//   constructor() {
//       this.heap = [];
//       this.comparator = function(idx1, idx2, heap) {
//           if (heap[idx1][1] < heap[idx2][1]) {
//               return true
//           } else {
//               return false
//           }
//       }
//   }
  
//   siftUp(currIdx, heap) {
//       let parentIdx = Math.floor((currIdx - 1) / 2)
//       while (currIdx > 0 && this.comparator(currIdx, parentIdx, heap)) {
//           this.swap(currIdx, parentIdx, heap)
//           currIdx = parentIdx;
//           parentIdx = Math.floor((currIdx - 1) / 2)
//       }
//   }
  
//   siftDown(currIdx, endIdx, heap) {
//       let child1 = Math.floor((currIdx * 2) + 1);
//       while (child1 <= endIdx) {
//           let child2 = Math.floor((currIdx * 2) + 2) > endIdx? -1: Math.floor((currIdx * 2) + 2)
//           let toSwap;
//           if (child2 !== -1 && this.comparator(child2, child1, heap)) {
//               toSwap = child2;
//           } else {
//               toSwap = child1;
//           }
          
//           if (this.comparator(toSwap, currIdx, heap)) {
//               this.swap(toSwap, currIdx, heap)
//               currIdx = toSwap;
//               child1 = Math.floor((currIdx * 2) + 1);
//           } else {
//               return
//           }
//       }
//   }
  
//   insert(item) {
//       this.heap.push(item);
//       this.siftUp(this.heap.length - 1, this.heap)
//   }
  
//   remove() {
//       this.swap(0, this.heap.length - 1, this.heap) 
//       const deleted = this.heap.pop();
//       this.siftDown(0, this.heap.length - 1, this.heap)
//       return deleted
//   }
  
//   swap(i, j, arr) {
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//   }
// }

// let intervals = [[0,1], [0,0], [1,3,], [2, -1], [4,5]]

// let min = new MinHeap();

// for (let i = 0; i < intervals.length; i++) {
//   min.insert(intervals[i])
//   console.log(min.heap)
// }

// let k = 5;

// for(let j = 0; j < k; j++) {
//   console.log(min.remove())
// }

// console.log(min.heap)


// var topKFrequent = function(words, k) {
//   // custom sort w lambda
//   // time nlogn space n
//   // return nlogn(words, k)
//   return nlogk(words, k)
// };

// var nlogn = function(words, k) {
//   let map = new Map();
  
//   // n operation to store length of words
//   for (const word of words) {
//       if (map.has(word)) {
//           let curr = map.get(word)
//           map.set(word, curr + 1)
//       } else {
//           map.set(word, 1)
//       }
//   }
  
//   // n log n sort w custom lambda fx 
//   let sorted = [...map.entries()].sort((a, b) => {
//       if (b[1] !== a[1]) {
//           return b[1] - a[1]
//       } else {
//           return a[0].localeCompare(b[0])
//       }

//   })
  
  
//   // n operation build res
//   let res = [];
  
//   for (let i = 0; i < k; i++) {
//       res.push(sorted[i][0])
//   }
  
//   return res
// }

// var nlogk = function(words, k) {
//   class MinHeap {
//     constructor() {
//       this.heap = [];
//       this.comparator = function(word1, word2) {
//         if (word1[1] > word2[1]) {
//           return true
//         } else if (word1[1] < word2[1]) {
//           return false
//         } else {
//           let res = word1[0].localeCompare(word2[0])
//           if (res === -1) {
//             return true
//           } else {
//             return false
//           }
//         }
//       }
//     }

//     siftUp(currIdx, heap) {
//       let parent = Math.floor((currIdx - 1) / 2);
//       while (currIdx > 0 && this.comparator(heap[currIdx], heap[parent])) {
//         this.swap(currIdx, parent, heap)
//         currIdx = parent;
//         parent = Math.floor((currIdx - 1) / 2)
//       }
//     }


//     siftDown(currIdx, endIdx, heap) {
//       let child1 = Math.floor((currIdx * 2) + 1);

//       while (child1 <= endIdx) {
//         let child2 = Math.floor((currIdx * 2) + 2) > endIdx? -1 : Math.floor((currIdx * 2) + 2)

//         let toSwap;
//         if (child2 !== -1 && this.comparator(heap[child2], heap[child1])) {
//           toSwap = child2;
//         } else {
//           toSwap = child1;
//         }

//         if (this.comparator(heap[toSwap], heap[currIdx])) {
//           this.swap(toSwap, currIdx, heap)
//           currIdx = toSwap;
//           child1 = Math.floor((currIdx * 2) + 1);
//         } else {
//           return
//         }
//       }
//     }

//     insert(item) {
//       this.heap.push(item)
//       this.siftUp(this.heap.length - 1, this.heap)
//     }

//     remove() {
//       this.swap(0, this.heap.length - 1, this.heap)
//       let res = this.heap.pop();
//       this.siftDown(0, this.heap.length - 1, this.heap)
//       return res
//     }

//     size() {
//       return this.heap.length
//     }


//     swap(i, j, heap) {
//       let temp = this.heap[i]
//       heap[i] = heap[j];
//       heap[j] = temp;
//     }
//   }

//   let map = new Map()
//   let heap = new MinHeap()

//   for (const word of words) {
//     if (map.has(word)) {
//       let curr = map.get(word);
//       map.set(word, curr + 1);
//     } else {
//       map.set(word, 1)
//     }
//   }

//   [...map.entries()].forEach(item => {
//     heap.insert(item)
//     // if (heap.size() > k) {
//     //   heap.remove()
//     // }
//   })

//   console.log(heap.heap)

//   let res = [];


//   for (let i = 0; i < k; i++) {
//     res.push(heap.remove())
//   }

//   return res

// }

// let arr = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"]

// let arr2 = ["i", "love", "leetcode", "i", "love", "coding"]


// console.log(topKFrequent(arr2, 2))


// function sol(mat) {
//   let rows = mat.length;
//   let cols = mat[0].length;

//   let dp = [];

//   let max = 0;


//   for (let i = 0; i <= rows; i++) {
//     let row = new Array(cols + 1).fill(0);
//     dp.push(row)
//   }

//   for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= cols;j++) {
//       if (mat[i-1][j-1] == '1'){
//         dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
//         max = Math.max(max, dp[i][j]);
//       }
//     }
//   }

//   console.log(dp, mat)

//   return max * max
// }

// let mat = [
//   [0,1,1,1,0],
//   [1,1,1,1,0],
//   [0,1,1,1,1],
//   [0,1,1,1,1],
//   [0,0,1,1,1]
// ]

// console.log(sol(mat))




// var calculate = function(s) {
//   let charArr = s.split('');
//   console.log(charArr)
//   let numStack = [];
//   let opStack = [];
//   let operators = { '/': true, '*': true, '-': true, '+': true}


//   while (charArr.length) {
//     let c = charArr.shift();

//     if (c === ' ') continue;

//     if (c in operators) {
//       opStack.push(c)
//     } else {
      
//       let numString = c;
//       let j = 0;

//       while (Number.isInteger(parseInt(charArr[j])) && j < charArr.length) {
//         numString = numString + charArr.shift()
//       }

//       let lastOp = opStack[opStack.length - 1];

//       if (lastOp === '/' || lastOp === '*') {
//         lastOp = opStack.pop();
//         let lastNum = Number(numStack.pop());
//         let currNum = Number(numString);
//         let newNum;

//         if (lastOp === '/') {
//           newNum = Math.floor(lastNum / currNum)
//         } else {
//           newNum = Math.floor(lastNum * currNum)
//         }

//         numStack.push(newNum.toString())
//       } else {
//         numStack.push(numString)
//       }
//     }
//   }

//   while (opStack.length) {
//     let firstNum = Number(numStack.shift());
//     let op = opStack.shift();
//     let secNum = Number(numStack.shift());

//     let res;

//     if (op === '+') {
//       res = firstNum + secNum;
//     } else {
//       res = firstNum - secNum;
//     }

//     numStack.unshift(res.toString())
//   }

//   return Number(numStack[0])

// };

// let s = '4/2 + 1-2+5*13 - 1'

// console.log(calculate(s))


// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]



// var decodeString = function(s) {
//   // two stack method
//   // one for letters
//   // one for brackets 
  
//   let charStack = [];
//   let bracketStack = [];
      
//   for (let i = 0; i < s.length; i++) {
//       if (i === 0) {
//           charStack.push(s[i])
//           continue;
//       } 

//       console.log(charStack)
//       if (s[i] === '[') {
//           bracketStack.push(s[i])
//       } else if (Number.isInteger(parseInt(s[i]))) {

//         if (Number.isInteger(parseInt(charStack[charStack.length - 1]))) {
//           let numChar = charStack.pop();
//           numChar = numChar + s[i];
//           charStack.push(numChar)
//         } else {
//           charStack.push(s[i])
//         }
//       } else if ( s[i] === ']') {
//           bracketStack.pop();
//           let str = charStack.pop();
//           let num = Number(charStack.pop());
//           let newS = "";
 
//           for (let i = 0; i < num; i++) {
//               newS += str
//           }

//           if (Number.isInteger(parseInt(charStack[charStack.length - 1])) || !charStack.length) {
//               charStack.push(newS)
//           } else {
//             let str = charStack.pop();
//             let newStr = str + newS;
//             charStack.push(newStr)
//           }
          
//       } else {
//           if (Number.isInteger(parseInt(charStack[charStack.length - 1]))) {
//               charStack.push(s[i])
//           } else {
//               let str = charStack.pop();
//               let newStr = str + s[i];
//               charStack.push(newStr)
//           }
//       }
//   }
  
//   return charStack.join('')
// };

// let s = "3[a2[c]]"
// let s2 = "3[a]2[bc]"
// let s3 = "100[leetcode]"
// let s4 = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef"


// console.log(decodeString(s4))

var ladderLength = function(beginWord, endWord, wordList) {

  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let dict = new Set(wordList);
  let visited = new Set();
  
  if (!dict.has(endWord)) return 0
  
  let q = [beginWord];
  let level = 1;
  
  
  while (q.length) {
      let numTimes = q.length;
      
      for (let i = 0; i < numTimes; i++) {
          let ele = q.shift();
          
          let currWord = ele.split('')
          for (let j = 0; j < currWord.length; j++) {
              let og = currWord[j]
              for (const c of alpha) {
                  // if (c === currWord[j]) continue
                  currWord[j] = c
                  let newWord = currWord.join('');

                  console.log(newWord, level)
                  if (newWord === endWord) {
                      return level + 1
                  }
                  if (dict.has(newWord)) {
                      q.push(newWord)
                      dict.delete(newWord)
                  }
              }
              currWord[j] = og;
              
          } 
          
      }
      console.log(q, level)
      level++
      
  }
  
  return 0   
};

let s = "ymain"
let n = "oecij"
let arr = ["ymann","yycrj","oecij","ymcnj","yzcrj","yycij","xecij","yecij","ymanj","yzcnj","ymain"]

// let s = "hit"
// let n = "cog"
// let arr = ["hot","dot","dog","lot","log","cog"]

console.log(ladderLength(s,n, arr))