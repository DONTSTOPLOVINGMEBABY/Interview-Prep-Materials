/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const ROWS = heights.length, COLS =  heights[0].length
    const atlantic = new Set(), pacific = new Set()
    function dfs (row, col, prevValue, ocean) {
        if (
            row < 0 || 
            row >= ROWS ||
            col < 0 || 
            col >= COLS || 
            heights[row][col] <= prevValue || 
            ocean.has(serialize(row, col))
        ) {
            return 
        }
        ocean.add(serialize(row, col))
        dfs(row + 1, col, heights[row][col], ocean) // down 
        dfs(row - 1, col, heights[row][col], ocean) // up 
        dfs(row, col + 1, heights[row][col], ocean) // left
        dfs(row, col - 1, heights[row][col], ocean) // right 
    }
    for (let row = 0 ; row < ROWS ; row++){
        dfs(row, 0, 0, pacific)
        dfs(row, COLS - 1, 0, atlantic)
    }
    for (let col = 0 ; col < COLS ; col++){
        dfs(0, col, 0, pacific)
        dfs(ROWS - 1, col, 0, atlantic)
    }
    const result = []
    // console.log(pacific)
    // console.log(atlantic)
    for (let row = 0 ; row < ROWS ; row++){
        for (let col = 0 ; col < COLS ; col++){
            if (pacific.has(serialize(row, col)) && atlantic.has(serialize(row, col))){
                result.push([row, col])
            }
        }
    }
    return result
};

function serialize (row, col) {
    return JSON.stringify([row, col])
}

const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]

console.log(pacificAtlantic(heights))