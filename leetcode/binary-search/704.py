def search(nums, target) :       
    def bs(nums):
        if len(nums) == 0: return -1 
        middle = (len(nums) // 2) - 1 
        print(nums[middle])
        if nums[middle] == target: return middle 
        elif nums[middle] < target : bs(nums[middle + 1:])
        else: search(nums[:middle - 1])

    kk = bs(nums)
    return kk         

nums = [-1,0,3,5,9,12]
target = 9 

print(search(nums, target))

print(nums[3:])

