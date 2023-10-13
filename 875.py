def minEatingSpeed(piles, h):
    import math 
    l, r = 1, max(piles)
    res = r 

    while l <= r :
        middle = (l + r) // 2 
        hours = 0 
        for p in piles:
            hours += math.ceil(p / middle)

        if hours <= h :
            res = min(res, middle)
            r = middle - 1 
        else :
            l = middle + 1 
    
    return res 


piles = [30,11,23,4,20]
hours = 6
minEatingSpeed(piles, hours)