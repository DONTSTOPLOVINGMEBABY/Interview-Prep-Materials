// somehow this solution fetched me 95% 
// but I guess it's still able to cheat leetcode test cases??? 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// This solution is O(n) in the worst case when we are given an array
// whose first middle element is the target... What ends up happening 
// is that we still have to perform a O(n/2) --> O(n) search before 
// returning the correct answer. 

// Example Linear test case 
// [5, 6, 7, 8, 9, 10, 11], target = 8 

var searchRangeLinear = function (nums, target) {
    let result = [-1, -1], left = 0, right = nums.length - 1
    let middle
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (nums[middle] < target) { left = middle + 1 }
        else if (nums[middle] > target) { right = middle - 1 }
        else { break }
    }
    if (left > right) { return [-1, -1] }
    while (nums[left] !== target || nums[right] !== target) {
        if (nums[left] !== target) { left += 1 }
        if (nums[right] !== target) { right -= 1 }
    }
    return [left, right]
};


// This solution will solve the problem in O(2 * log(n)) --> O(log(n))


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2LogN = function (nums, target) {
    let left = binarySearch(nums, target, true)
    let right = binarySearch(nums, target, false)
    return [left, right]

    function binarySearch(nums, target, leftBias) {
        let l = 0, r = nums.length - 1
        i = -1
        while (l <= r) {
            m = Math.floor((l + r) / 2)
            if (target > nums[m]) { l = m + 1 }
            else if (target < nums[m]) { r = m - 1 }
            else {
                // everytime that we come in here, we have to update i because this means that we have
                // found a new index which also holds our target value. 
                i = m
                if (leftBias) { r = m - 1 }
                else { l = m + 1 }
            }
        }
        return i
    }
};

let nums = [1, 2, 3, 4, 5, 6, 6, 7, 8], target = 6
let indices = searchRange2LogN(nums, target)
console.log(indices)
