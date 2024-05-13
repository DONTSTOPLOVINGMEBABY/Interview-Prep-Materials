/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = Math.max(...nums)
    let curMin = 1, curMax = 1

    for (let num of nums) {
        let temp = curMax * num
        curMax = Math.max(temp, num * curMin, num)
        curMin = Math.min(temp, num * curMin, num)
        res = Math.max(curMax, res)
    }

    return res
};

console.log(maxProduct([2, 3, -4, 4]))

/*
We are going to need a global variable to keep track of the max. This variable is initialized to be the largest individual element in the given array

We then have two local variables, one that keeps track of the localMin and one that keeps track of the localMax. 

We will then iterate through every number in nums, and perform the following actions. 

    - assign the maximum value received by the following operations to currMax (num or the current element in the array, num * currMax, num * currMin)
    - assign the minimum value received by the following operations to currMikn (num or the current element in the array, num * currMax, num * currMin)
    - assign the maximum value between currMax and res to res. 

return res after the iteration is complete
*/