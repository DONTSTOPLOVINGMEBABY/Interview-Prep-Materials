def minEatingSpeed(piles, h):
    import math
    piles.sort()
    if len(piles) == h:
        return piles[-1]
    found = False 
    left = 0 
    right = len(piles) - 1
    while True :
        
        break
        
        
        
        
        
        
        # if left == right + 1: pass 
        # # we need to expand our search array then to include all of the integers 
        # # between left and right exclusive and repeat the binary search on said array 
        # middle = int((right - left) // 2)
        # ones = (middle - left + 1) # the amount of time to eat all bannanas less than middle
        # rest = (right - middle) * (math.ceil(piles[-1] / piles[middle]))
        # tots = rest + ones
        # if ones + rest > h :
        #     left += middle + 1 
        # elif ones + rest < h :
        #     right -= middle - 1
        # else: 
        #     return piles[middle]
        
piles = [30,11,23,4,20] 
h = 6

minEatingSpeed(piles, h)