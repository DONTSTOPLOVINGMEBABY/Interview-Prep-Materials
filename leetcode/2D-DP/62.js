// unique paths
// n squared time? 

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m === 1) { return 1 }
    let shotInTheDark = new Array(m).fill(null).map(() => new Array(n).fill(1))
    shotInTheDark[0][0] = 0
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            shotInTheDark[i][j] = shotInTheDark[i - 1][j] + shotInTheDark[i][j - 1]
        }
    }
    return shotInTheDark[m - 1][n - 1]
};

//new Array(m).fill(null).map(() => new Array(n).fill(null));

console.log(uniquePaths(3, 7))
console.log(uniquePaths(3, 2))
