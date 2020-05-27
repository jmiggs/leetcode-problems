// JEWELS AND STONES
// JEWELS AND STONES
// JEWELS AND STONES
// JEWELS AND STONES

// var numJewelsInStones = function(J, S) {
//   let jwls = J.split('');
//   let stones = S.split('')
//   let count = 0;
//   let hash = {};
  
//   for (let i = 0; i < stones.length; i++) {
//     let stone = stones[i];
//     if (!hash[stone]) {
//       hash[stone] = 1;
//     } else {
//       hash[stone] += 1;
//     }
//   }

//   for (let j = 0; j < jwls.length; j++) {
//     let jwl = jwls[j];
//     let toAdd = !hash[jwl]? 0 : hash[jwl];
//     count += toAdd;
//   }
//   return count;   
// };

// solution from leetcode:::
// .filter goes through every word in S.split and checks the condition provided in the parens.
// it will return an array. then just check the length of the returned array

// var numJewelsInStones2 = function(J,S) {
//   return S.split('').filter( s => J.includes(s)).length;
// }

//linear time complexity O(n);
// 
// let res = numJewelsInStones2("aA","aAAbbbb" )

// console.log(res)

// RANSOM NOTE
// RANSOM NOTE
// RANSOM NOTE

var canConstruct = function(ransomNote, magazine) {
  let hash = {};
  let ransomeArr = ransomNote.split('')

  for (let i = 0; i < ransomeArr.length; i++) {
    if (!hash[ransomeArr[i]]) {
      hash[ransomeArr[i]] = 1;
    } else {
      hash[ransomeArr[i]] += 1;
    }

    let count = magazine.split('').filter(letter => letter === ransomeArr[i]).length;
    if (count < hash[ransomeArr[i]]) return false;
  }
  return true;
};


// Leetcode solution

var canConstruct2 = function(ransomNote, magazine) {
  if(ransomNote.length > magazine.length)
      return false
  magArr = magazine.split("");
  let i = 0;
  for(i = 0;i<ransomNote.length;i++){
      let index = magArr.indexOf(ransomNote[i])
      if(index>-1)
          magArr[index] = "";
      else
          return false;
  }
  return true;
  
};

let res = canConstruct("aaac","aaab")

console.log(res)