/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const visited = new Set(), queue = [], ROWS = grid.length, COLS = grid[0].length
    let days = 0, rotten = 0, fresh = 0

    function generatePossibleMoves(row, col) {
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        const legalMoves = []
        for (let [shiftX, shiftY] of directions) {
            let tempRow = row, tempCol = col
            tempRow += shiftX
            tempCol += shiftY
            if (
                tempRow >= 0 &&
                tempRow < ROWS &&
                tempCol >= 0 &&
                tempCol < COLS &&
                !visited.has(serialize(tempRow, tempCol)) &&
                grid[tempRow][tempCol] === 1
            ) {
                legalMoves.push([tempRow, tempCol])
            }
        }
        return legalMoves
    }


    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 2) {
                queue.push([row, col])
                visited.add(serialize(row, col))
                rotten += 1
            } else if (grid[row][col] === 1) {
                fresh += 1
            }
        }
    }

    while (queue.length) {
        let updateRotten = false
        let queue_length = queue.length
        for (let i = 0; i < queue_length; i++) {
            let [rowCurr, colCurr] = queue.shift()
            let possibleMoves = generatePossibleMoves(rowCurr, colCurr)
            for (let [newRow, newCol] of possibleMoves) {
                // add to set
                // add to queue 
                // change grid[newRow][newCol] to be rotten
                // update rotten number
                // decrement fresh number 
                updateRotten = true
                queue.push([newRow, newCol])
                grid[newRow][newCol] = 2
                visited.add(serialize(newRow, newCol))
                rotten += 1
                fresh -= 1
            }

        }
        if (updateRotten) {
            days += 1
        }
    }

    if (fresh !== 0) { return - 1 }
    return days
};


function serialize(row, col) {
    return JSON.stringify([row, col])
}


const grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]

console.log(orangesRotting(grid))