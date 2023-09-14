/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = new Map()
    let freq = Array(nums.length).fill(null).map(() => [])
    for (let num of nums){
        if (count.has(num)){
            count.set(num, count.get(num) + 1)
        }
        else {
            count.set(num, 0)
        }
    }
    for (let [key, value] of count){
        freq[value] = [...freq[value], key]
    }
    let output = []
    let the_ctr = nums.length - 1 
    while (the_ctr >= 0 && output.length < k){
        while (freq[the_ctr].length > 0){
            output.push(freq[the_ctr].pop())
        }
        the_ctr -= 1 
    }
    console.log(output)
};

const nums = [1,1,1,2,2,3], k = 2 
// const nums = [-1, -1], k = 1 
// const nums = [3,0,1,0], k = 1 


console.log(topKFrequent(nums, k))