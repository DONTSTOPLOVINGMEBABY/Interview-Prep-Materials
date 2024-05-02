/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length <= 3) { return Math.max(...nums) }
    var rob2 = function (start, finish) {
        if (finish - start <= 2) { return Math.max(...nums.slice(start, finish)) }
        let maxArray = new Array(finish - start)
        if (nums[start] > nums[start + 1]) {
            maxArray[0] = nums[start]
            maxArray[1] = nums[start]
        } else {
            maxArray[0] = nums[start]
            maxArray[1] = nums[start + 1]
        }
        let relativeCounter = 2
        for (let i = start + 2; i < finish; i++) {
            if (nums[i] + maxArray[relativeCounter - 2] > maxArray[relativeCounter - 1]) {
                maxArray[relativeCounter] = nums[i] + maxArray[relativeCounter - 2]
            }
            else {
                maxArray[relativeCounter] = maxArray[relativeCounter - 1]
            }
            relativeCounter += 1
        }
        return maxArray[maxArray.length - 1]
    }
    return Math.max(rob2(0, nums.length - 1), rob2(1, nums.length))
};

const nums = [1, 2, 3, 1]

console.log(rob(nums))