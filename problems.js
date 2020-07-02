// var lengthOfLongestSubstring = function(s) {
//   const n = s.length;
  
//   if(n <= 1) {
//       return n;
//   }
//   else {
//      // Sliding window
//       let set = new Set();
      
//       let max = 0, i = 0, j = 0;
      
//       while(i < n && j < n) {
//           if(!set.has(s.charAt(j))) {
//               set.add(s.charAt(j++));
//               max = Math.max(max, j - i);
//           }
//           else {
//             // if there is a letter already in the hash, the i var will keep deleting and incrementing up until the dup letter
//             // clearing out the hash until the dupe letter!!!!
//               set.delete(s.charAt(i++));
//           }

//           console.log(i, j, set, max)
//       }
      
//       return max;
//   }
// };

// lengthOfLongestSubstring('abcxgxa')


// var isPalindrome = function(x) {
//   if (!x) return true
//   if (x % 10 === 0 || x < 0) return false;
//   if ( x < 10) return true

//   let rev = 0
//   while (x > rev) {
//       let pop = x % 10 // get last digit
//       x = Math.floor(x/10) // remove last digit from x
//       rev = (rev * 10) + pop // add pop to rev in reverse manner
//       console.log(x, rev)
//   }
  

//   return x === rev || x === Math.floor(rev/10)
  
// };


// var removeElement = function(nums, val) {
//   nums.sort(); 
//   let j = 0;
//   let startIdx = -1;
  
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === val && startIdx === -1) {
//           startIdx = i;
//           j++
//           continue;
//       }
      
//       if (startIdx >= 0) {
//           if (nums[i] === val) {
//               j++
//               continue;
//           } else {
//               break;
//           }
//       }
//   }

//   nums.splice(startIdx, j)

//   return nums
// };

// console.log(removeElement([3,2,2,3], 3))


// var rotate = function(nums, k) {
    
//   let l = nums.length
//   let i = 0
  
//   let curr = nums[i]
  
//   while (l >= 0) {
//       let nextIdx = (i + k) % nums.length;
//       let temp = nums[nextIdx];
      
//       nums[nextIdx] = curr
//       curr = temp
//       i = nextIdx
//       l--
//       console.log(i, nums, l)
//   }

// };

// let arr = [-1,-100,3,99]
// let arr2 = [1,2,3,4,5,6,7]

// rotate(arr,2);

// var isHappy = function(n) {
//   return happyHelper(n)
// };

// function happyHelper(n, memo = {}) {
//    if (n === 1) return true
//    if (!n) return false
   
   
//    let current = n;
//    let sum = 0
   
//    while (current !== 0) {
//        sum += (current % 10) * (current % 10)
//        current = Math.floor(current/10)
//    }
   
//    if (n in memo) return false
//    memo[n] = true
   
//    return happyHelper(sum, memo)
// }

// console.log(happyHelper(2))

// O(n) time & O(n) space
// var isIsomorphic = function(s, t) {
//   let hash = {};
//   let hash2 = {};

//   for (let i = 0; i < s.length; i++) {
//     if (hash[s[i]]) {
//       if (hash[s[i]] !== t[i]) return false;
//     } else {
//       hash[s[i]] = t[i]
//     }

//   }

//   for (i = 0; i < s.length; i++) {
//     if (hash2[t[i]]) {
//       if (hash2[t[i]] !== s[i]) return false;
//     } else {
//       hash2[t[i]] = s[i]
//     }

//   }
//   return true
// };

// let s = "abb"
// let t = "acc"
// console.log(isIsomorphic(s, t))


var reverseWords = function(s) {
  let arr = s.split(' ');

  for (let i = 0; i < arr.length; i++) {
      let news = revHelper(arr[i].split(''))
      arr[i] = news
  }
  
  return arr.join(' ');
};

function revHelper(s) {
  let i = 0
  let j = s.length - 1
  // return
  while (i < j) {
    let temp = s[i];

    s[i] = s[j];
    s[j] = temp;
    i++
    j--
  }
  
  return s.join('')
};

console.log(reverseWords("Let's take LeetCode contest"))