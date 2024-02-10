/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const keyboard = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }   
``
    if (digits.length === 0){ return [] }

    let result = []
    let numCharacters = digits.length

    let characters = digits.split('')
    for (let i = 0 ; i < characters.length ; i++) {
        characters[i] = keyboard[characters[i]]
    }

    function dfs (level, substring) {
        if (substring.length === numCharacters){
            result.push(substring)
            return
        }
        for (let i = 0 ; i < characters[level].length; i++){
            substring += characters[level][i]
            dfs(level + 1, substring)
            substring = substring.slice(0, substring.length - 1)
        }
    }

    dfs(0, '')
    return result
};