// Number of Islands

// let arr = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ];

  var combinationSum = function(candidates, target) {
    this.ans = []
    var recurse = function(candidates, target, currIdx, currArr, currSum) {
        
        if (currSum === target) {
            this.ans.push(currArr)
            return
        } else if (currSum > target) {
            return 
        } else {

            if (currIdx === candidates.length) return
            
            let currNum = candidates[currIdx];
            
            let currArr1 = currArr.slice(0);
            
            currArr.push(currNum)
            
            recurse(candidates, target, currIdx, currArr, currSum + currNum)
            recurse(candidates, target, currIdx + 1, currArr1, currSum)
            
        }
    }
    
    recurse(candidates, target, 0, [], 0)

    return this.ans
};


let arr = [2,3, 6, 7]
let arr2 = [2,3,5]

console.log(combinationSum(arr2, 8))