def findMin(nums):
    res = nums[0]
    l = 0 
    r = len(nums) - 1 

    while l <= r : 
        if nums[l] < nums[r]:
            res = min(res, nums[l])
            break 
        
        m = (l + r) // 2 
        res = min(res, nums[m])
        if nums[m] >= nums[l]:
            l = m + 1 
        else: 
            r = m - 1     

nums = [3,4,5,1,2]
nums2 = [7, 0, 1, 2, 4, 5, 6]
nums3 = [11, 13, 15, 17]
findMin(nums)
findMin(nums2)
findMin(nums3)