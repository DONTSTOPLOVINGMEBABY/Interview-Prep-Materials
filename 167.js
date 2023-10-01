/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let ptr1 = 0, ptr2 = numbers.length - 1
    for (let i = 0 ; i < numbers.length; i++){
        let calc = numbers[ptr1] + numbers[ptr2]
        if (calc === target){ return [ptr1 + 1, ptr2 + 1] }
        if (calc < target){
            ptr1 += 1 
        }
        else {
            ptr2 -= 1
        }
    }
};