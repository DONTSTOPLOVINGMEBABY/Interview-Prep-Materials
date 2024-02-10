/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const visited = new Set(), ROWS = grid.length, COLS = grid[0].length, queue = []
    let numDays = 0
    let seenRotten = false
    let numFresh = 0
    queue.push([0, 0])
    visited.add(serialize(0, 0))
    while (queue.length) {
        let numInQueue = queue.length
        for (let i = 0; i < numInQueue; i++) {
            let [row, col] = queue.shift()
            let legalMoves = returnPossibleMoves(row, col, ROWS, COLS, visited, queue)
            if (grid[row][col] === 2) {
                seenRotten = true
                legalMoves.forEach((move) => {
                    let [row, col] = move
                    if (grid[row][col] === 1) {
                        grid[row][col] = 2
                    }
                })
            }
            else if (grid[row][col] === 1) { numFresh += 1 }
        }
        if (seenRotten) {
            numDays += 1
        }
        seenRotten = false
    }
    return numDays
};

function returnPossibleMoves(row, col, ROWS, COLS, visited, queue) {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const legalMoves = []
    for (let direction of directions) {
        let tempRow = row, tempCol = col
        tempRow += direction[0]
        tempCol += direction[1]
        if (tempRow >= 0 && tempRow < ROWS && tempCol >= 0 && tempCol < COLS && !visited.has(serialize(tempRow, tempCol))) {
            legalMoves.push([tempRow, tempCol])
            visited.add(serialize(tempRow, tempCol))
            queue.push([tempRow, tempCol])
        }
    }
    return legalMoves
}

function serialize(row, col) {
    return JSON.stringify([row, col])
}

const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
]

/* 

[R, F, F]
[F, F, E]
[E, F, F]

*/

console.log(orangesRotting(grid))