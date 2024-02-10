/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const visited = new Set(), ROWS = board.length, COLS = board[0].length
    function dfs(row, col) {
        if (
            row < 0 ||
            row >= ROWS ||
            col < 0 ||
            col >= COLS ||
            board[row][col] === 'X' ||
            visited.has(serialize(row, col))
        ) { return }

        visited.add(serialize(row, col))
        board[row][col] = 'T'

        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }

    for (let col = 0; col < COLS; col++) {
        dfs(0, col)
        dfs(ROWS - 1, col)
    }
    for (let row = 0; row < ROWS; row++) {
        dfs(row, 0)
        dfs(row, COLS - 1)
    }

    console.log(board)
    return

};

function serialize(row, col) {
    return JSON.stringify([row, col])
}

// All O's 

const board = [
    ["O", "O", "O"],
    ["O", "O", "O"],
    ["O", "O", "O"],
]

const board2 = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "X", "X"],
]

// solve(board)
console.log(solve(board2))

/* 
Two approaches that I see are to either go through, build a working set of things that need to be changed
and then once all of those paths are searched, then go through and change them. 
    -> Something like an array that you push to everytime and then once every possibility has been searched
    you will just iterate over the array after the call to dfs in the loop at the bottom. 

The second approach is to simply just do it inside of dfs, which I think makes more sense 
*/