function sortKMessedArray(arr, k) {

    function swap(idx1, idx2) {
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }

    for (let i = 0; i < arr.length - 1; i++) {
        let smallestElement = arr[i], smallestIndex = i
        let ctr = 1
        while (ctr <= k && i + ctr < arr.length) {
            if (arr[i + ctr] < smallestElement) {
                smallestIndex = i + ctr
                smallestElement = arr[smallestIndex]
            }
            ctr += 1
        }
        if (i !== smallestIndex) { swap(i, smallestIndex) }
    }

    return arr
}

const unsorted = [6, 1, 4, 11, 2, 0, 3, 7, 10, 5, 8, 9], k = 6

console.log(sortKMessedArray(unsorted, k))