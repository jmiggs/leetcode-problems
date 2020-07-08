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


// var reverseWords = function(s) {
//   let arr = s.split(' ');

//   for (let i = 0; i < arr.length; i++) {
//       let news = revHelper(arr[i].split(''))
//       arr[i] = news
//   }
  
//   return arr.join(' ');
// };

// function revHelper(s) {
//   let i = 0
//   let j = s.length - 1
//   // return
//   while (i < j) {
//     let temp = s[i];

//     s[i] = s[j];
//     s[j] = temp;
//     i++
//     j--
//   }
  
//   return s.join('')
// };

// console.log(reverseWords("Let's take LeetCode contest"))

// var runningSum = function(nums) {
//   for (let i = 0; i < nums.length;i++) {
//     console.log(i)
//       if (i === 0) continue;
      
//       nums[i] = nums[i-1] + nums[i]
//   }
  
//   return nums[nums.length - 1]
// };

// runningSum([1,2,3,4])

// stack helper

// function stackHelper(root, stack) {
//   if (!root) return;
  
//   if (root.right) stack.push(root.right);
//   if (root.left)  stack.push(root.left);
  
//   stackHelper(root.right, stack)
//   stackHelper(root.left, stack)
  
//   return stack
// }


// var checkPossibility = function(nums) {
//   let modified = false;

//   for (let i = 0; i < nums.length - 1;i++) {
//     if (nums[i] > nums[i + 1]) {
//       if (modified) return false

//       modified = true;

//       // in this for loop we're deciding if how to change the array
//       // so that the the array becomes decreasing:


//       if (i== 0 || nums[i + 1] >= nums[i - 1]) {
//         // here the next number is greater than the previous number:
//         // consider [1,4,2,3] @ index 1 so 4;
//         // we have to change 4 to 2 so that the array is non-decreasing

//         // Note that we can also change i + 1 (2) to i (4) to get
//         // [1,4,4,3]
//         // but we should probably just change to the lower amount

//         nums[i] = nums[i + 1]
//       } else {

//         // here the next number from i is less than the previous number from i;
//         // consider [2,4,1,3]
//         // to make this array non-decreasing, we change 1 to 3
//         nums[i + 1] = nums[i]
//       }
//     }

//   }

//   return true

// };

// checkPossibility([3,4,2,3])


// var KthLargest = function(k, nums) {
//   this.nums = nums.sort((a,b)=> a - b);
//   this.k = k

// };

// KthLargest.prototype.add = function(val) {

//   this.nums.push(val)
  
//   let i = this.nums.length - 1
//   while (i > 0 && this.nums[i] < this.nums[i-1]) {
//       let temp = this.nums[i-1];
//       this.nums[i-1] = this.nums[i]
//       this.nums[i] = temp
//       i--
//   }
  
//   console.log(this.nums)
//   return this.nums[this.nums.length - this.k]
// };

// let arr = [-10,1,3,1,4,10,3,9,4,5,1];
// console.log(arr.sort((a,b)=> a-b ))



// let k = 7

// var obj = new KthLargest(k, arr)
// console.log(obj)

// obj.add(3)
// obj.add(3)
// obj.add(3)
// obj.add(3)
// obj.add(2)
// obj.add(3)
// obj.add(1)
// obj.add(2)
// obj.add(4)
// obj.add(5)
// obj.add(5)
// obj.add(6)
// obj.add(7)
// obj.add(7)
// obj.add(8)
// obj.add(8)
// obj.add(2)
// obj.add(3)
// obj.add(1)
// obj.add(1)
// obj.add(1)
// obj.add(10)
// obj.add(11)
// obj.add(5)
// obj.add(6)
// obj.add(2)
// obj.add(4)
// obj.add(7)
// obj.add(8)
// obj.add(5)
// obj.add(6)


// var countCharacters = function(words, chars) {
//   let hash = {};
  
//   for (const letter of chars) {
//       if (letter in hash) {
//           hash[letter] += 1
//       } else {
//           hash[letter] = 1
//       }
//   }

//   let string = `boygirdlggnh`
//   let hash2 = {}

//   for (const letter of string) {
//     if (letter in hash2) {
//         hash2[letter] += 1
//     } else {
//         hash2[letter] = 1
//     }
// }

//   for (let i = 0; i < string.length; i++) {
//     console.log(string[i], hash[string[i]], hash2[string[i]])
//   }

//   return


//   let res = 0
  
//   for (const word of words) {

//       let flag = false;
//       let hashCopy = JSON.parse(JSON.stringify(hash))

//       for (let i = 0; i < word.length; i++) {
//           if (!(word[i] in hash)) break;
          
//           if (word[i] in hash) {
//               hashCopy[word[i]] -= 1
//           }

//           if (hashCopy[word[i]] < 0) break;
            
//           if (i === word.length - 1) flag = true;

//       }
       
//       if (flag) {
//         res += word.length
//       }
//   }
  
//   return res
// };


// let arr = ["dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin","ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb","ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl","boygirdlggnh","xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx","nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop","hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx","juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr","lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo","oxgaskztzroxuntiwlfyufddl","tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp","qnagrpfzlyrouolqquytwnwnsqnmuzphne","eeilfdaookieawrrbvtnqfzcricvhpiv","sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz","yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue","hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv","cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo","teyygdmmyadppuopvqdodaczob","qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs","qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"]
// let chars = "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"
// console.log(countCharacters(arr,chars))


let hash = {1: 'yes'}

for (const color in hash) {
  console.log(color)
}