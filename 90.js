var subsetsWithDup = function(nums) {

    nums.sort((a, b) => a - b)
    
    let result = []
    let subset = []
    
    function makeSubsets(i){
        if (i >= nums.length){
            if (subset.length){result.push([...subset])}
            return
        }

        
        subset.push(nums[i])
        makeSubsets(i + 1)
        subset.pop()


        while (i + 1 < nums.length && nums[i] === nums[i + 1]){
            i += 1 
        }
        makeSubsets(i + 1)
    }

    makeSubsets(0)
    return result
};

console.log(subsetsWithDup([1, 2, 2]))