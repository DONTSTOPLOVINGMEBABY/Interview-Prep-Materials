// /**
//  * @param {number[]} cost
//  * @return {number}
//  */
var minCostClimbingStairs2 = function (cost) {
    let twoStep = cost[cost.length - 1], oneStep = cost[cost.length - 2]
    for (let i = cost.length - 3; i >= 0; i--) {
        let sum = cost[i] + Math.min(oneStep, twoStep)
        twoStep = oneStep
        oneStep = sum
    }
    return Math.min(oneStep, twoStep)
};

// /* [1,100,1,1,1,100,1,1,100,1] */

var minCostClimbingStairs = function (cost) {
    let first = cost[cost.length - 1], second = cost[cost.length - 2]
    for (let i = cost.length - 3; i >= 0; i--) {
        sum = cost[i] + Math.min(first, second)
        second = first
        first = sum
    }
    return Math.min(first, second)
};


minCostClimbingStairs2([10, 15, 20])