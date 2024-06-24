var change = function (amount, coins) {
    const serialize = (i, curr_amount) => {
        return JSON.stringify([i, curr_amount])
    }
    let dp = {}
    function dfs(i, curr_amount) {

    }

};

const amount = 5, coins = [1, 2, 5]
console.log(change(amount, coins))





/* 
We have amount = 5, coins = [1, 2, 5]

                5
            [1, 2, 5]


            5
            [2, 5]


            5
            [5]

In order to avoid repeated paths, we won't use the same thing over and over again. 



*/
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