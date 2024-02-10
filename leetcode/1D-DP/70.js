/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // let seen = new Set()
    // function slow (string, curr) {
    //     if (curr === 0 && !seen.has(string)){
    //         seen.add(string)
    //         return
    //     }
    //     else if (curr < 0) { return }
    //     string += `${curr}`
    //     slow(string, curr - 1)
    //     slow(string, curr - 2)
    // }
    // slow('', 8)
    // return seen.size
    // let memoizedArray = []

    let bottomsUp = [1, 0]
    if (n == 0) { return 0 }
    if (n == 1) { return 1 }
    for (let i = 0 ; i <= n; i++){
        let sum = bottomsUp[1] + bottomsUp[0]
        bottomsUp[0] = bottomsUp[1]
        bottomsUp[1] = sum 
    }
    return bottomsUp[1]
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function(n) {
    let one = 1, two = 1, temp 
    for (let i = 0 ; i < n - 1; i++) {
        temp = one 
        one = one + two 
        two = temp 
    }
    return one 
};

console.log(climbStairs(10))

/* 
One dimension that we can choose is from is either taking 1 step or taking 2 steps 
*/

