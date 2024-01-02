var combinationSum2 = function(candidates, target) {
    let result = []
    candidates.sort((a, b) => a - b)
    function backtrack(i, total, subset){
        if (total === target){
            result.push([...subset])
            return
        } else if (i === candidates.length || total > target){
            return
        }
     subset.push(candidates[i])
     backtrack(i + 1, total + candidates[i], subset)
     subset.pop()
     while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]){
        i += 1 
     }
     backtrack(i + 1, total, subset) 
    }
 
     backtrack(0, 0, [])
     return result
 };

console.log(combinationSum2([10,1,2,7,6,1,5], 8))

/* 
    while (i + 1 < nums.length && nums[i] === nums[i + 1]){
        i += 1 
    }
    makeSubsets(i + 1)
*/


/*
This should be the answer

[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

*/