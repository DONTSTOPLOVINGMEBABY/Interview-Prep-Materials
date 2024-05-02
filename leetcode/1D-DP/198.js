/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 1) { return nums[0] }
    let keepArray = new Array(nums.length).fill(null)
    keepArray[0] = nums[0]
    keepArray[1] = nums[1]
    let largest = nums[0]

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] + keepArray[i - 2] > largest) {
            keepArray[i] = nums[i] + largest
            largest = nums[i] + largest
        }
        else {
            keepArray[i] = largest
        }
    }

    return largest
};

/* 
A much more elegant solution


def rob(self, nums: List[int]) -> int:
    rob1, rob2 = 0, 0

    for n in nums:
        temp = max(n + rob1, rob2)
        rob1 = rob2
        rob2 = temp
    return rob2


function rob (nums) {
    let rob1 = 0, rob2 = 0 
    for (let num of nums){
        let temp = Math.max(num + rob1, rob2)
        rob1 = rob2 
        rob2 = temp
    }
    return rob2 
}

*/

const nums1 = [1, 2, 3, 1]
// output should be 4
const nums2 = [1, 3, 1]
// output should be 3

rob(nums2)