def subsets(nums):
    result = []
    subset = []

    def makeSubset(n):
        if n >= len(nums):
            result.append(subset)
            return 

        subset.append(nums[n])
        makeSubset(n + 1)

        subset.pop()
        makeSubset(n + 1)

    makeSubset(0)
    return result

subsets([1, 2, 3])