
// This function demonstrates a common pitfall when using binary search, where a less than operator is used
// in the while condition, and a false a negative is returned to the caller

function commonFailurePatternOne(array, element) {
	let middles = []
	let left = 0, right = array.length - 1, middle
	while (left < right) {
		middle = Math.floor((right + left) / 2)
		middles.push(middle)
		if (array[middle] < element) left = middle + 1
		else if (array[middle] > element) right = middle - 1
		else return [true, left, right]
	}
	return [false, left, right]
}

// This function corrects for the pitfall above while still using a < operator

function fixFailurePatternOne(array, element) {
	let middles = []
	let left = 0, right = array.length - 1, middle
	while (left <= right) {
		middle = Math.floor((right + left) / 2)
		middles.push(middle)
		if (array[middle] < element) left = middle + 1
		else if (array[middle] > element) right = middle - 1
		else return [true, left, right]
	}
	return [false, left, right]
}

// This function returns an array with elements 1..n inclusive

function initializeArray(n) {
	let array = []
	for (let i = 1; i <= n; i++)
		array.push(i)
	return array
}

let oddArray = initializeArray(11)
let evenArray = initializeArray(12)

console.log("Incorrectly searching odd array")
for (let i = 1; i < oddArray.length; i++) {
	let [found, left, right] = commonFailurePatternOne(oddArray, i)
	if (!found) { console.log(`odd array element index: ${i}. Last left: ${left} and Last right: ${right}`) }
}

console.log("Incorrectly searching odd array")
for (let i = 1; i < evenArray.length; i++) {
	let [found, left, right] = commonFailurePatternOne(evenArray, i)
	if (!found) { console.log(`even array element index: ${i}. Last left: ${left} and Last right: ${right}`) }
}

for (let i = 1; i < oddArray.length; i++) {
	let [found, left, right] = fixFailurePatternOne(oddArray, i)
	if (!found) { console.log(`odd array element index: ${i}. Last left: ${left} and Last right: ${right}`) }
}

for (let i = 1; i < evenArray.length; i++) {
	let [found, left, right] = fixFailurePatternOne(evenArray, i)
	if (!found) { console.log(`even array element index: ${i}. Last left: ${left} and Last right: ${right}`) }
}