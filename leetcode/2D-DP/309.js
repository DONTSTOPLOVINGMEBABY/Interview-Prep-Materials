/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const serialize = (i, buying) => {
        return JSON.stringify([i, buying])
    }
    let dp = {}
    function dfs(i, buying) {
        if (i >= prices.length) { return 0 }
        if (dp[serialize(i, buying)]) { return dp[serialize(i, buying)] }

        if (buying) {
            let buy = dfs(i + 1, !buying) - prices[i]
            let cooldown = dfs(i + 1, buying)
            dp[serialize(i, buying)] = Math.max(buy, cooldown)
        }
        else {
            let sell = dfs(i + 2, !buying) + prices[i]
            let cooldown = dfs(i + 1, buying)
            dp[serialize(i, buying)] = Math.max(sell, cooldown)
        }
        return dp[serialize(i, buying)]
    }
    return dfs(0, true)
};


/**
 * @param {number[]} prices
 * @return {number}
 */
function withoutACache(prices) {
    function dfs(i, buying) {
        if (i >= prices.length) { return 0 }
        let max
        if (buying) {
            let buy = dfs(i + 1, !buying) - prices[i]
            let cooldown = dfs(i + 1, buying)
            max = Math.max(buy, cooldown)
        }
        else {
            let sell = dfs(i + 2, !buying) + prices[i]
            let cooldown = dfs(i + 1, buying)
            max = Math.max(sell, cooldown)
        }
        return max
    }
    return dfs(0, true)
}


let prices1 = [1, 2, 3, 0, 2]
console.log(maxProfit(prices1))
console.log(withoutACache(prices1))
