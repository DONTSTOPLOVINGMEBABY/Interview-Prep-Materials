/* 
Solutions layed out by optimality
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function (strs) {
    strs.sort()
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) {
            return strs[0].substring(0, i)
        }
    }
    return strs[0]
};


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix2 = function (strs) {
    if (strs.length === 1) { return strs[0] }
    let prefix = "", currChar = "", currCounter = 0
    let forWhateverReason = false
    while (!forWhateverReason) {
        for (let i = 1; i < strs.length; i++) {
            if (
                currCounter < strs[i - 1].length &&
                currCounter < strs[i].length &&
                strs[i][currCounter] === strs[i - 1][currCounter]
            ) { continue }
            forWhateverReason = true
        }
        if (!forWhateverReason) prefix += strs[0][currCounter]
        currCounter += 1
    }
    return prefix
};

/* 
It has to start from the beginning. So as long as it is not interrupted, then it is good


"flower"
"fkow"


"fl"
"fk"

- the longest common prefix is f because both of the second characters differ, which makes the longest shared prefix 


*/