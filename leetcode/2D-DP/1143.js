// the non dp way
// that is also incorrect and incomplete ¯\_(ツ)_/¯ 

function nonDPWay(text1, text2) {
    // let substring = ''
    // let text2Curr = 0
    // for (let i = 0; i < text1.length; i++) {
    //     for (let j = text2Curr; j < text2.length; j++) {
    //         if (text1[i] === text2[j]) {
    //             substring += text1[i]
    //             text2Curr = j + 1
    //             console.log(i, "did break")
    //         }
    //     }
    // }
    // return substring.length
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let dp = new Array(text1.length + 1).fill(null).map(() => new Array(text2.length + 1).fill(0))
    for (let i = text1.length - 1; i >= 0; i--) {
        for (let j = text2.length - 1; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[i][j] = dp[i + 1][j + 1] + 1
            }
            else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1])
            }
        }
    }
    return dp[0][0]
};


// console.log(nonDPWay("abcde", "ace"))
// console.log(nonDPWay("abc", "abc"))
// console.log(nonDPWay("abc", "def"))
// console.log(nonDPWay("oxcpqrsvwf", "shmtulqrypy"))




console.log(longestCommonSubsequence("abcde", "ace"))
console.log(longestCommonSubsequence("abc", "abc"))
console.log(longestCommonSubsequence("abc", "def"))
console.log(longestCommonSubsequence("oxcpqrsvwf", "shmtulqrypy"))
