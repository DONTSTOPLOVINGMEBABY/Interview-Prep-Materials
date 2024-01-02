# function fourSum(nums: number[], target: number): number[][] {
#     // we need to sort the array
#     // then fix two pointers and use a two pointer approach
#     // for the last two elements 

#     console.log('hairy pickle!')

#     // assume O(n(logn))
#     nums.sort((a, b) => a - b)
#     console.log(nums)
#     let result: number[][] = []

#     for (let first = 0 ; first < nums.length - 3 ; first++){
#         if (nums[first] === nums[first + 1]){ continue }
#         for (let second = first + 1 ; second < nums.length - 2; second++){
#             if (nums[second] === nums[second + 1]){ continue }
#             let third = second + 1 
#             let fourth = nums.length - 1 
#             while (third < fourth) {
#                 // if (nums[third] === nums[third + 1]){
#                 //     third += 1 
#                 //     continue
#                 // }
#                 if (nums[first] + nums[second] + nums[third] + nums[fourth] < target){
#                     third += 1 
#                 }
#                 else if (nums[first] + nums[second] + nums[third] + nums[fourth] > target){
#                     fourth -= 1 
#                 } else {
#                     result.push([nums[first],nums[second],nums[third],nums[fourth]])
#                     third += 1 
#                 }
#             }
#         }
#     }
#     return result
# };

# const nums = [1,0,-1,0,-2,2]

# fourSum(nums, 0)

def fourSum(nums, target):

    nums.sort()
    result = []
    for first in range(0, len(nums) - 3):
        if nums[first] == nums[first + 1]: continue 
        for second in range(first + 1, len(nums) - 2):
            # if nums[second] == nums[second + 1]: continue 
            third = second + 1 
            fourth = len(nums) - 1 
            while third < fourth : 
                print(nums[first] + nums[second] + nums[third] + nums[fourth])
                if nums[first] + nums[second] + nums[third] + nums[fourth] < target:
                    third += 1 
                elif nums[first] + nums[second] + nums[third] + nums[fourth] > target:
                    fourth -= 1 
                else:
                    result.append([nums[first],nums[second],nums[third],nums[fourth]])
                    third += 1 
    
    return result 


print(fourSum([1,0,-1,0,-2,2], 0))