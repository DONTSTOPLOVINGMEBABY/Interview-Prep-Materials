var combinationSum = function(candidates, target) {
    
    let result = []
    let ctr = 0 

    function backtrack(i, total, subset){
        if (total === target){
            result.push([...subset])
            return
        }
        else if (i === candidates.length || total > target){
            return 
        }
        ctr += 1 
        // we are going to add the same element 
        subset.push(candidates[i])
        backtrack(i, total + candidates[i], subset)

        // we are going to add the next element 

        if (subset.length === 1){
            console.log(subset, ctr)
        }
        subset.pop()
        backtrack(i + 1, total, subset)
    }

    backtrack(0, 0, [])
    return result 

};

combinationSum([2, 3, 6, 7], 7)