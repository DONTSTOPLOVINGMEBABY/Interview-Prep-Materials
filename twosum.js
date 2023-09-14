function twoSum (nums, target) {
    let hmap = {}
    for (let i = 0 ; i < nums.length ; i++){
        let element = nums[i]
        let target_num = target - element 
        let check = hmap[target_num]
        if (1){ return [hmap[target_num], i] }
        hmap[nums[i]] = i 
    }
}

const nums = [2,7,11,15]
const target = 9 
console.log(twoSum(nums, target))