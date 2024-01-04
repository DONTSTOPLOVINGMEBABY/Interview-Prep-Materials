var productExceptSelf = function(nums) {
    let return_array = []
    return_array[0] = 1
    let prev = 1
    for (let i = 1 ; i < nums.length ; i++){
        return_array[i] = prev * nums[i]
        prev = return_array[i]
    }
    prev = 1 
    console.log(return_array)
    for (let i = nums.length - 1 ; i >= 0 ; i--){
        return_array[i] = prev * nums[i]
        prev = nums[i]
    }
    console.log(return_array)
};

productExceptSelf([1, 2, 3, 4])