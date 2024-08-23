// Say m = number of rows and n = number of columns 


// The solution below is suboptimal because it first has to linearly scan through each row (m)
// and then performs binary search on a single row log(n), making the time complexity O(m + log(n)). 
// The problem states that it can be done in O(log(m * n))

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let bottom = matrix.length - 1
    let top = 0
    let middle
    let last_row_element = matrix[0].length - 1
    let target_row = -1
    while (top <= bottom) {
        middle = Math.floor((bottom + top) / 2)
        if (matrix[middle][0] > target) { bottom = middle - 1 }
        else if (matrix[middle][last_row_element] < target) { top = middle + 1 }
        else { target_row = middle; break }
    }
    if (target_row === -1) { return false }

    let left = 0, right = last_row_element
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (matrix[target_row][middle] < target) { left = middle + 1 }
        else if (matrix[target_row][middle] > target) { right = middle - 1 }
        else { return true }
    }
    return false
};


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = -1, last_col = matrix[0].length - 1
    for (let curr_row = 0; curr_row < matrix.length; curr_row++) {
        if (matrix[curr_row][last_col] >= target) {
            row = curr_row
            break
        }
    }
    if (row === -1) { return false }
    // perform binary search
    let left = 0, right = last_col, middle
    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        if (matrix[row][middle] < target) { left = middle + 1 }
        else if (matrix[row][middle] > target) { right = middle - 1 }
        else { return true }
    }
    return false
};

searchMatrixCorrectly([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)


/* 

m = number of rows
n = number of columns



We need to know the row 
    - We'll search the last element in each row and ask, is this last element in row greater than or equal to the target. 
        - If yes, then we break out of this loop, and we'll use this row. 
        - If no, then we repeat the process on the next row
        - If we run out of rows (meaning our loop breaks and row is still set to its initial value, then we can return false)

    - Once we know the row number that the element is potentially in, we will perform stadnard binary search on that row. 

1. Search rows
2. If no element found to be greater than or equal to target, return false
3. Binary search on specific row. 
    - If element is found, return true 
    - If binary search fails, return false

*/