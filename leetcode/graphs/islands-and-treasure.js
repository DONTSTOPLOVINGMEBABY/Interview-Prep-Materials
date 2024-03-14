/*

Example 1 

Input = [
    [2147483647,-1,0,2147483647],
    [2147483647,2147483647,2147483647,-1],
    [2147483647,-1,2147483647,-1],
    [0,-1,2147483647,2147483647]
]
  
Output = [
    [3,-1,0,1],
    [2,2,1,-1],
    [1,-1,2,-1],
    [0,-1,3,4]
]

Example 2 

Input = [
  [0,-1],
  [2147483647,2147483647]
]

Output = [
  [0,-1],
  [1,2]
]

*/

function islandsAndTreasure(grid) {
    const ROWS = grid.length, COLS = grid[0].length
    const LAND = 2147483647, WATER = -1, TREASURE = 0
    const visited = new Set()
    let level = 1
    const queue = []

    function serialize(row, col) {
        return JSON.stringify([row, col])
    }

    const inBounds = (row, col) => {
        return row >= 0 && row < ROWS && col >= 0 && col < COLS
    }

    // this function will add a cell to the queue 
    function addCell(row, col) {
        let hashed = serialize(row, col)
        if (!inBounds(row, col) ||
            grid[row][col] <= 0 ||
            visited.has(hashed)
        ) {
            return
        }
        queue.push([row, col])
        visited.add(hashed)
        grid[row][col] = level
    }

    // first add all of the gates to the queue 
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === TREASURE) {
                queue.push([row, col])
                visited.add(serialize(row, col))
            }
        }
    }

    while (queue.length) {
        let qLen = queue.length
        for (let i = 0; i < qLen; i++) {
            let [currRow, currCol] = queue.shift()
            addCell(currRow + 1, currCol)
            addCell(currRow - 1, currCol)
            addCell(currRow, currCol + 1)
            addCell(currRow, currCol - 1)
        }
        level += 1
    }

    return grid
}



const example1 = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]
]

// Output = 
//     [3,-1,0,1],
//     [2,2,1,-1],
//     [1,-1,2,-1],
//     [0,-1,3,4]
// 

const example2 = [
    [2147483647, -1, 0, 2147483647],
    [2147483647, 2147483647, 2147483647, -1],
    [2147483647, -1, 2147483647, -1],
    [0, -1, 2147483647, 2147483647]
]

// Output 
//  [0,-1],
//  [1,2]

console.log(islandsAndTreasure(example1))
console.log(islandsAndTreasure(example2))
