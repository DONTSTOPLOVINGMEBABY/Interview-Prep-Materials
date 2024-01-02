var exist = function(board, word) {
    
    const visited = new Set()
    let wordExists = false 

    function dfs(positionRow, positionCol, letterIndex){
        if (letterIndex === word.length){ return true }
        else if (letterIndex === 0 && grid[positionRow][positionCol] === word[letterIndex]){
            visited.add(addToSet(position)) 
            
        }
        if (grid[positionRow][positionCol] === word[letterIndex]){

        }
        
    }


};

function getLegalCoords(ROWS, COLS, Curr){
    const moves = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let legal_moves = []
    for (let move of moves){
        let applyRow = Curr[0] + move[0]
        let applyCol = Curr[1] + move[1]
        if (applyRow < ROWS && applyCol < COLS){
            legal_moves.push([applyRow, applyCol])
        }
    }
    return legal_moves
}

function addToSet(set, coordinates){
    set.add(JSON.stringify(coordinates))
}