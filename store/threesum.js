/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length === 3){
        if ((nums[0] + nums[1] + nums[2]) === 0){ return [nums] }
        else { return [] }
    }
    let result = []
    nums.sort(function (a, b) { return a - b })
    let seenb4 = new Set()
    for (let i = 0 ; i < nums.length ; i++){
        if (seenb4.has(nums[i])){ continue }
        let target = 0 - nums[i]
        let ptr1 = i + 1, ptr2 = nums.length - 1 
        for (let k = i + 1 ; k < nums.length - 1 ; k++){
            let sum = nums[ptr1] + nums[ptr2]
            if (sum === target){ result.push([
                nums[i], 
                nums[ptr1], 
                nums[ptr2]
            ])}
            if (sum < target){
                ptr1 += 1 
            }
            else {
                ptr2 -= 1 
            }
        }
        seenb4.add(nums[i])
    }
    return result
};

threeSum([0, 0, 0, 0])