/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let len = s.length
    let dp = {}
    dp[len] = 1

    const checkIfCharacterInRange = (char) => {
        return char === '0' || char === '1' || char === '2' || char === '3' || char === '4' || char === '5' || char === '6'
    }

    function dfs(i) {
        if (dp[i] !== undefined) { return dp[i] }
        if (s[i] === '0') { return 0 }
        let res = dfs(i + 1)
        if (i + 1 < len && (s[i] === '1' || s[i] === '2' && checkIfCharacterInRange(s[i + 1]))) {
            res += dfs(i + 2)
        }
        dp[i] = res
        return res
    }
    return dfs(0)

};