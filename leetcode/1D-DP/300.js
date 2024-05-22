/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    // let res = 1
    // let dp = new Array(nums.length).fill(1)
    // for (let i = nums.length - 1; i >= 0; i--) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] < nums[j]) {
    //             dp[i] = Math.max(1, 1 + dp[j])
    //             res = Math.max(dp[i], res)
    //         }
    //     }

    // }
    // return res
    let LIS = new Array(nums.length).fill(1)

    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                LIS[i] = Math.max(LIS[i], 1 + LIS[j])
            }
        }
    }
    return Math.max(...LIS)
};

var recursiveLTS = (nums) => {
    let res = 1

    function getItDone(numbers, i) {
        if (i >= nums.length) { return }
        if (nums[i] < nums[i + 1]) { numbers.push(nums[i]) }
        res = Math.max(res, numbers.length)
        getItDone(numbers, i + 1)
    }

    getItDone([nums[0]], 0)
    return res
}

console.log(recursiveLTS([1, 2, 4, 3]))
console.log(recursiveLTS([10, 9, 2, 5, 3, 7, 101, 18]))
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
// console.log(lengthOfLIS([1, 2, 4, 3]))

/* 
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

You can delete elements, so long as the order is not changed 

nums = [10, 9, 2, 5, 3, 7, 101, 18]
output: 4 


2, 3, 7, 101




*/