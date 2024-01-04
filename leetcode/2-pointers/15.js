/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = []
    for (let i = 0 ; i < nums.length ; i++){
         if (i > 0 && nums[i] === nums[i - 1]){ continue }
         let ptr2 = i + 1, ptr3 = nums.length - 1 
         while (ptr2 < ptr3){
             let sum = nums[i] + nums[ptr2] + nums[ptr3]
             if (sum < 0){
                 ptr2 += 1 
             } 
             if (sum > 0) {
                 ptr3 -= 1
             }
             else {
                 result.push([nums[i], nums[ptr2], nums[ptr3]])
                 ptr2 += 1 
                 while (nums[ptr2] === nums[ptr2 - 1] && ptr2 < ptr3){
                     ptr2 += 1 
                 }
             }
         }
    }
    return result
 };
 
 