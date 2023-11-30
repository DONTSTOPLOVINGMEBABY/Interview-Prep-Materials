
def searchMatrix(matrix, target) :
    
    if matrix[0][0] > target : return False 

    def search2 (nums, target):
        if len(nums) == 1 and nums[0] == target: return True
        left = 0 
        right = len(nums) - 1 
        middle = (right - left) // 2 
        while left <= right: 
            if nums[middle] < target :
                left = middle + 1 
            elif nums[middle] > target : 
                right = middle - 1 
            else :
                return True  
            middle = ((right - left) // 2) + left
        return False

    grabIndex = 0 
    for index, row in enumerate(matrix):
        if matrix[index][0] < target : continue 
        elif matrix[index][0] == target: return True 
        else:
            grabIndex = index - 1 
            break

    return search2(matrix[grabIndex], target)


matrix = [[1],[3]]
target = 3
searchMatrix(matrix, target)