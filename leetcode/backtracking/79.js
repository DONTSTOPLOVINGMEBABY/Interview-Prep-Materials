/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    const visited = new Set()
    let wordExists = false

    function dfs(positionRow, positionCol, letterIndex) {
        if (letterIndex === word.length) {
            wordExists = true
            return true
        }
        else if (letterIndex === 0) {
            visited.add(addToSet(visited, [positionRow, positionCol]))
        }
        for (let [row, col] of getLegalCoords(board.length, board[0].length, [positionRow, positionCol], visited)) {
            if (board[positionRow][positionCol] === word[letterIndex]) {
                return dfs(row, col, letterIndex + 1)
            } else {
                return dfs(row, col, letterIndex)
            }
        }
        return false
    }

    dfs(0, 0, 0)
    return wordExists
};

function getLegalCoords(ROWS, COLS, Curr, visited) {
    const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let legal_moves = []
    for (let move of moves) {
        let applyRow = Curr[0] + move[0]
        let applyCol = Curr[1] + move[1]
        if (applyRow < ROWS && applyCol < COLS && !visited.has(JSON.stringify([applyRow, applyCol]))) {
            legal_moves.push([applyRow, applyCol])
        }
    }
    return legal_moves
}

function addToSet(set, coordinates) {
    set.add(JSON.stringify(coordinates))
}

let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
let word = "ABCCED"

console.log(exist(board, word))