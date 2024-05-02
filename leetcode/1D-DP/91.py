def numEncodings (s) :
    dp = { len(s) : 1 }

    def dfs (i):
        if i in dp:
            return dp[i]
        if s[i] == '0':
            return 0 
        
        res = dfs(i + 1)
        if (i + 1 < len(s) and (s[i] == '1' or s[i] == '2' and s[i + 1] in '0123456')):
            # if we get here, then we have successfully combined two characters to make a valid letter. 
            # this means that we will now recursively continue the process on the rest of the string, excluding the two characters
            res += dfs(i + 2)
        dp[i] = res
        return res 
    
    return dfs(0)

print(numEncodings('106'))

'''
input: '12'
output: 2 

Possible combinations are ['12', '1 2']

The rules are that there can't be a leading zero in front of a digit and all indidivual groupings must fall into the range 1 <= n <= 26 


Solution:






'''