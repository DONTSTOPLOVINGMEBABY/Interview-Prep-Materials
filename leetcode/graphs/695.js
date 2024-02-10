/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let visited = new Set(), ROWS = grid.length, COLS = grid[0].length
    let globalLargest = 0, localLargest = 0
    function dfs(row, col) {
        if (
            row < 0 ||
            row >= ROWS ||
            col < 0 ||
            col >= COLS ||
            grid[row][col] === 0 ||
            visited.has(serialize(row, col))
        ) { return }
        visited.add(serialize(row, col))
        localLargest += 1
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            if (grid[row][col] === 1 && !visited.has(serialize(row, col))) {
                dfs(row, col)
                if (localLargest > globalLargest) { globalLargest = localLargest }
                localLargest = 0
            }
        }
    }
    return globalLargest
};

function serialize(row, col) {
    return JSON.stringify([row, col])
}

const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
]

console.log(maxAreaOfIsland(grid))