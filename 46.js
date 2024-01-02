var permute = function(nums) {

    let result = []

    if (nums.length === 1){
        return [[...nums]]
    }

    for (let i = 0; i < nums.length; i++){

        let first = nums.shift()
        let permutations = permute(nums)

        for (let permutation of permutations){
            permutation.push(first)
        }

        result = [...result, ...permutations]
    }

    return result

    /* 
    nums = [1, 2, 3]

    1, 2, 3

    2, 3

    2
    3

    2, 3, 1
    
    3, 2, 1

    */
};

permute([1, 2, 3])