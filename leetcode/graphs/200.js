/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let visited = new Set(), ROWS = grid.length, COLS = grid[0].length 
    let numIslands = 0 

    function dfs(row, col) {
        if (
            row < 0 || 
            row >= ROWS || 
            col < 0 || 
            col >= COLS || 
            grid[row][col] === '0' ||
            visited.has(serialize(row, col))
        ) { return }
        console.log(grid[row][col])
        visited.add(serialize(row, col))
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }
    for (let row = 0 ; row < ROWS ; row++){
        for (let col = 0 ; col < COLS ; col++){
            if (grid[row][col] === '1' && !visited.has(serialize(row, col))){
                dfs(row, col)
                numIslands += 1 
            }
        }
    }


    return numIslands 
};

function serialize (row, col) {
    return JSON.stringify([row, col])
}


const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]

console.log(numIslands(grid))