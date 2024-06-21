// Recursive Binary Search


function recursiveBinarySearch(array, left, right, target) {
    let middle = Math.floor((right + left) / 2)
    if (array[middle] === target) { return middle }
    else if (array[middle] < target) {
        return recursiveBinarySearch(
            array,
            middle + 1,
            right,
            target
        )
    }
    else if (array[middle] > target) {
        return recursiveBinarySearch(
            array,
            left,
            middle - 1,
            target
        )
    }
    else { return -1 }
}

/* 
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 5
correct_output = 4 






*/


// This function returns an array with elements 1..n inclusive

function initializeArray(n) {
    let array = []
    for (let i = 1; i <= n; i++)
        array.push(i)
    return array
}

let evenArray = initializeArray(12)
console.log(recursiveBinarySearch(evenArray, 0, evenArray.length, 12))