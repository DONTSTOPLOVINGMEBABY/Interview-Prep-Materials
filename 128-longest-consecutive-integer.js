/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if (nums.length == 0){ return 0 }
    let longest = 1 
    let seen = new Map()
    for (let num of nums){
        seen.set(num, true)
    }
    for (let i = 0 ; i < nums.length ; i++){
        let local_ctr = 1 
        if (!seen.has(nums[i]) - 1){
            let number = nums[i]
            while (seen.has(number + 1)){
                number += 1 
                local_ctr += 1
            }
            if (local_ctr > longest){ longest = local_ctr }
        }
    }
    return longest
};

const nums = [100,4,200,1,3,2]

longestConsecutive(nums)