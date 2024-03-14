function reverseWords(arr) {
    function reverseInPlace(start, finish) {
        while (start < finish) {
            let temp = arr[start]
            arr[start] = arr[finish]
            arr[finish] = temp
            start += 1
            finish -= 1
        }
    }

    arr = arr.reverse()

    let laggard = 0
    let current = 0
    while (current < arr.length) {
        if (current + 1 === arr.length || arr[current + 1] == ' ') {
            reverseInPlace(laggard, current)
            laggard = current + 2
        }
        current += 1
    }
    return arr
}

const arr = ['p', 'e', 'r', 'f', 'e', 'c', 't', ' ',
    'm', 'a', 'k', 'e', 's', ' ',
    'p', 'r', 'a', 'c', 't', 'i', 'c', 'e']

console.log(reverseWords(arr))