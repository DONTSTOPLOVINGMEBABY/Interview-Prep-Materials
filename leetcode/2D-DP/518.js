// coin change ii

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    // this solution is incorrect
    const serialize = (curr_amount, num_coins) => {
        return JSON.stringify([curr_amount, num_coins])
    }
    let dp = {}
    function dfs(curr_amount, num_coins) {
        if (curr_amount < 0) { return 0 }
        if (dp[serialize(curr_amount, num_coins)]) { return dp[serialize(curr_amount, num_coins)] }
        if (curr_amount === 0) { return 1 }
        let sum = 0
        for (let c of coins) {
            if (curr_amount - c >= 0) {
                let thang = dfs(curr_amount - c, num_coins + 1)
                dp[serialize(curr_amount, num_coins)] = thang
            }
        }
        return dp[serialize(curr_amount, num_coins)]
    }
    return dfs(amount, 0)
};

/* 
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for (let curr_amount = 1 ; curr_amount < dp.length; curr_amount++){
        for (let coin of coins){
            if (curr_amount - coin >= 0) {
                dp[curr_amount] = Math.min(dp[curr_amount], 1 + dp[curr_amount - coin])
            }
        }
    }
    return dp[amount] !== amount + 1 ? dp[amount] : -1
};
*/