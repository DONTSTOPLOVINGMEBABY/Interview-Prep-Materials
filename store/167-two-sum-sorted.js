/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let ptr1 = 0 
    let ptr2 = numbers.length - 1 
    for (let i = 0 ; i < numbers.length ; i++){
        let recalculate = numbers[ptr2] + numbers[ptr1]
        if (target < recalculate){
            ptr1 += 1 
        }
        else if (target > recalculate){
            ptr2 -= 1
        }
        else {
            break
        }
    }
    return [ptr1 + 1, ptr2 + 1]
};

const numbers = [2,7,11,15]
console.log(twoSum(numbers, 9))