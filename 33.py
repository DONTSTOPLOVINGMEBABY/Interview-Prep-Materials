def search(nums, target):
    left = 0 
    right = len(nums) - 1 
    while left <= right :
        if nums[left] < nums[right] and (target < nums[left] or target > nums[right]): 
            return -1 
        
        middle = (left + right) // 2 
        if nums[middle] == target: 
            return middle 

        if nums[middle] > nums[left] and target >= nums[left] and target < nums[right]:
            right = middle - 1 
        elif nums[middle] > nums[left] and target < nums[left]:
            left = middle + 1 
        elif nums[middle] > nums[left] and target <= nums[left] :
            right = middle - 1
        
        
        
    return -1

# nums = [4, 5, 6, 7, 0, 1, 2]
# target = 0 
nums = [4,5,6,7,0,1,2]
target = 0 
print(search(nums, 5))