# def findMin(nums):
#     res = nums[0]
#     l = 0 
#     r = len(nums) - 1 

#     while l <= r : 
#         if nums[l] < nums[r]:
#             res = min(res, nums[l])
#             break 
        
#         m = (l + r) // 2 
#         res = min(res, nums[m])
#         if nums[m] >= nums[l]:
#             l = m + 1 
#         else: 
#             r = m - 1     

def findMin(nums):
    res = nums[0]
    left = 0 
    right = len(nums) - 1 
    while left <= right:
        if nums[left] < nums[right] : 
            res = min(nums[left], res)
            break 

        middle = (right + left) // 2 
        res = min(res, nums[middle])
        if nums[middle] >= nums[left] :
            left = middle + 1
        else:
            right = middle - 1 


    return res 





# nums = [3,4,5,1,2]
nums = [3, 1, 2]
nums2 = [7, 0, 1, 2, 4, 5, 6]
nums3 = [11, 13, 15, 17]
findMin(nums)
findMin(nums2)
findMin(nums3)