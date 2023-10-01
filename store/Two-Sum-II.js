var twoSum = function(numbers, target) {
    let map = new Map()
    for (let i = 0 ; i < numbers.length ; i++){
        let search = numbers[i] - target
        console.log(search)
        if (map.has(search)){
            return [map.get(search), i + 1]
        }
        else {
            map.set(numbers[i], i + 1)
        }
    }
};

const numbers = [2,7,11,15], target = 9
twoSum(numbers, target)