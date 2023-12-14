## Henry's stab at an interative BS Algo 
## This one returns the index if the element is in the array
## and false if otherwise
def henrysIterativeBS (nums, target):
    if len(nums) == 1 and nums[0] == target: return 0
    left = 0 
    right = len(nums) - 1 
    middle = (right - left) // 2 
    while left < right: 
        if nums[middle] < target :
            left = middle + 1 
        elif nums[middle] > target : 
            right = middle - 1 
        else :
            return middle 
        middle = ((right - left) // 2) + left
    return -1 


def prettyRecursiveMethod(nums, target): 

    def callInternal (nums, target, index):
        if len(nums) == 0 : return -1 
        middle = (len(nums) - 1) // 2 
        if nums[middle] < target: 
            nums = nums[middle + 1:]
            index += middle + 1 
            return callInternal(nums, target, index)
        elif nums[middle] > target : 
            nums = nums[:middle]
            return callInternal(nums, target, index)
        else :
            return index + middle
            
    return callInternal(nums, target, 0)

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7 

array2 = [-1,0,3,5,9,12]
target2 = 9 

# print(prettyRecursiveMethod(array, target))
print(prettyRecursiveMethod(array2, target2))