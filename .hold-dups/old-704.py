array = [1, 2, 3, 4, 5, 6]

# splice array 3 to 6 excluding 3 

print(array[3:])

# splice array from 0 to 4 excluding 4 

print(array[:3])


def search (nums, target) :

    if len(nums) == 0 : return -1 
    middle = (len(nums) - 1) // 2 
    if nums[middle] < target :
        return search(nums[middle + 1:], target)
    elif nums[middle] > target :
        return search(nums[:middle + 1], target) 
    else:
        return middle


def search2 (nums, target):

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



practice_array = [-1, 0, 3, 5, 9, 12]
target = 9 

print(search(practice_array, target))
print(search2(practice_array, target))