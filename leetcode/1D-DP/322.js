/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // array will always be of length >= 1 
    let dp = new Array(amount + 1).fill(amount + 1)
    // always takes zero coins to reach 0, no matter what coins are given
    dp[0] = 0
    for (let curr_amount = 1; curr_amount < amount + 1; curr_amount++) {
        for (let coin of coins) {
            if (curr_amount - coin >= 0) {
                dp[curr_amount] = Math.min(dp[curr_amount], 1 + dp[curr_amount - coin])
            }
        }
    }
    return dp[amount] !== amount + 1 ? dp[amount] : -1
};

/* 
We need an array with amount + 1 elements, each element initialized to amount + 1 

    - We use amount + 1 because if we are trying to reach an amount of 11 and only have coins with a value of 1, the last entry will take exactly the same number of coins as the amount that we are trying to reach 

We then set the first element to be equal to zero, as it will always take zero coins to get an amount of zero 

We will then iterate from the bottom up, calculating the minimum number of coins needed to reach each individual amount. We can find out the minimum
number of coins that will need to be used to reach the amount - specific_coin value by searching the array for the minimum number it takes to reach (amount - specific_coin) and only updating our current dp entry if that value is less than the current space's value. 

We will then return the last element in the array only if it is not equal to amount + 1 (the default value that was set) and if it is equal to amount + 1, we will return -1 


*/