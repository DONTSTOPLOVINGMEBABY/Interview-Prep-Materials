/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false)
    dp[s.length] = true

    for (let i = s.length - 1; i >= 0; i--) {
        for (let word of wordDict) {
            if (i + word.length <= s.length && s.slice(i, i + word.length) === word)
                dp[i] = dp[i + word.length]
            if (dp[i]) { break }
        }
    }
    return dp[0]
};

function recursiveWordBreak(s, wordDict) {
    function dfs(start) {
        if (start === s.length) { return true }
        for (let end = start + 1; end <= s.length; end++) {
            if (wordDict.includes(s.slice(start, end)) && dfs(end)) {
                return true
            }
        }
        return false
    }
    return dfs(0);
}

// console.log(wordBreak('leetcode', ['leet', 'code']))
console.log(recursiveWordBreak('leetcode', ['leet', 'code']))
console.log(recursiveWordBreak("applepenapple", ["apple", "pen"]))
console.log(recursiveWordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))
console.log(recursiveWordBreak("aaaaaaa", ["aaaa", "aaa"]))