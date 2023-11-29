def combinationSum(candidates, target):
    result = []
    def dfs(i, cur, total):
        if total == target:
            result.append(cur.copy())
            return
        elif i == len(candidates) or total > target:
            return
        
        cur.append(candidates[i])
        dfs(i, cur, total + candidates[i])
        print(i)

        cur.pop()
        dfs(i + 1, cur, total)

    dfs(0, [], 0)
    return result
print(combinationSum([2,3,6,7], 7))