import math 

def minmax(array) :
    big = -math.inf
    small = math.inf
    for integer in array : 
        if integer < small : 
            small = integer 
        if integer > big : 
            big = integer
    return [big, small] 


def minEatingSpeed(piles, h) :

    biggest_element = max(piles)
    
    if len(piles) == h : return biggest_element
    left = 0 
    right = len(piles) - 1 
    while left <= right : 
        middle = (right - left) // 2 
        number_eaten = (middle + 1) + math.ceil(biggest_element / piles[middle]) * middle 
        if number_eaten == h: 
            return piles[middle]
        elif number_eaten < h :
            left += middle + 1 
        else : 
            right -= middle - 1 
    





piles = [3,6,7,11]
hours = 8 
minEatingSpeed(piles, hours)