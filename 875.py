# def minEatingSpeed(piles, h):
#     import math 
#     l, r = 1, max(piles)
#     res = r 

#     while l <= r :
#         middle = (l + r) // 2 
#         hours = 0 
#         for p in piles:
#             hours += math.ceil(p / middle)

#         if hours <= h :
#             res = min(res, middle)
#             r = middle - 1 
#         else :
#             l = middle + 1 
    
#     return res 


def minEatingSpeed(piles, h):
    import math 
    ## We know that the maximum is going to be the largest number 
    ## bananas in the given piles. The lowest possible amount is going to be 
    ## 1
    maxNum = max(piles)
    if len(piles) == h :
        return maxNum 
    left, right = 1, maxNum 
    while left <= right :
        middle = (left + right) // 2 
        totalTime = 0
        for pile in piles:
            totalTime += math.ceil(pile/middle)
        if totalTime < h :
            right = middle - 1 
        elif totalTime > h :
            left = middle + 1 
        else:
            return middle 


# piles = [30,11,23,4,20]
# hours = 6
# piles = [3,6,7,11]
# hours = 8 
piles = [312884470]
hours = 312884469
minEatingSpeed(piles, hours)


'''

[332484035,524908576,855865114,632922376,222257295,690155293,112677673,679580077,337406589,290818316,877337160,901728858,679284947,688210097,692137887,718203285,629455728,941802184]
h =
823855818


'''