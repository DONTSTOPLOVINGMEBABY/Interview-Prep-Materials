temp = []
result = []
nums = [1, 2, 3]
def permute():        
    if len(temp) == len(nums):
        result.append(temp.copy())
        return

    
permute()
print(result)