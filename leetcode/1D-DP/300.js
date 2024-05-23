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
    function dfs(ind, prev_index) {
        if (ind === nums.length) { return 0; }
        let notTake = 0 + dfs(ind + 1, prev_index);
        let take = 0;
        if (prev_index === -1 || nums[ind] > nums[prev_index]) {
            take = 1 + dfs(ind + 1, ind);
        }
        return Math.max(take, notTake);
    }
    return dfs(0, -1);
}

console.log(recursiveLTS([1, 2, 4, 3]))
console.log(recursiveLTS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([1, 2, 4, 3]))
console.log(recursiveLTS([7, 7, 7, 7, 7, 7, 7]));
console.log(recursiveLTS([0, 2, 4, 3]));

/* 
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

You can delete elements, so long as the order is not changed 

nums = [10, 9, 2, 5, 3, 7, 101, 18]
output: 4 


2, 3, 7, 101


*/