/* 
Code
Testcase
Testcase
Test Result
416. Partition Equal Subset Sum
*/

// var canPartition = function (nums) {
//     let total = nums.reduce((accum, curr) => accum + curr, 0)
//     if (total % 2 !== 0) { return false }
//     let goal = total / 2
//     console.log(goal)
//     let yas = false

//     function dfs(i, localTotal) {
//         if (localTotal === goal) { return true }
//         if (localTotal > goal || i === nums.length) { return false }
//         if (localTotal + nums[i] > goal) { return dfs(i + 1, localTotal) }
//         return dfs(i + 1, localTotal + nums[i])
//     }
//     return dfs(0, 0)
// };

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let total = nums.reduce((accum, curr) => accum + curr, 0)
    if (total % 2 !== 0) { return false }
    let goal = total / 2
    let visited = new Set([0])
    for (let i = nums.length - 1; i >= 0; i--) {
        let arrCurr = nums[i]
        let numInSet = visited.size
        let currNum = 0
        for (let item of visited) {
            if (currNum === numInSet) { break }
            if (arrCurr + item === goal) { return true }
            if (arrCurr + item < goal) { visited.add(arrCurr + item) }
            currNum += 1
        }
    }
    return false
};

// console.log(canPartition([1, 5, 11, 5]))
// console.log(canPartition([1, 2, 3, 4]))
// console.log(canPartition([1, 2, 3, 4, 5, 6, 7]))
// console.log(canPartition([14, 9, 8, 4, 3, 2]))


console.log(canPartition([1, 2, 5]))
// receiving false but should be true
console.log(canPartition([1, 5, 11, 5]))