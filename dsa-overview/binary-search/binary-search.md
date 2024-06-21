# Binary Search

Binary search is a technique that's used to search <b>sorted</b> arrays for given elements in a more efficient manner than linearly scanning for the elements from start to finish. Given a sorted array, BS is able to search and return the element, if it exists, in O(log n) time in the worst case. 

## Psuedocode

Iterative Implementation of Binary Search

```
function iterative_binary_search(array, target)
    left = 0
    right = array.length - 1 
    while left <= right :
        middle = Floor((right + left) / 2) 
        if array[middle] < target:
            left = middle + 1 
        else if array[middle] > target:
            right = middle - 1 
        else:
            return middle
    return -1  # represents element was not found
```

Recursive Implementation of Binary Search

``` 
function recursive_binary_search (array, left, right, target)
    middle = Floor((left + right) / 2)
    if array[middle] == target:
        return middle 
    else if array[middle] < target:
        return recursive_binary_search(
            array, 
            middle + 1, 
            right, 
            target
        )
    else if array[middle] > target:
        return recursive_binary_search(
            array, 
            left, 
            middle - 1, 
            target
        )
    else:
        return -1 
```

## Runtime

O(1) best case - Element is found on first iteration

O(log n) - Average Case <b>Need to prove this one somehow</b>

O(log n) - Worst Case


## Common Questions

#### 1. How is O(log n) time complexity achieved? 

<b>BS takes advantage of the fact that the input array is sorted.</b> During each iteration, we look at the middle element of our current subset in the current iteration. If this middle element is smaller than the supplied input element, we know we need to search all of the elements to right of this middle element. In the case where the middle element is larger than the supplied input element, we know that we need to search to the left. We know that the middle element must be the element we are searching for when it is not larger or smaller than the supplied element. 

Since BS arrays are sorted, we are able to rely on these three rules to inform our search, and since we are halving our subset array with each iteration, we can expect to exhaustively search the array in O(log n) time. 

#### 2. When is your while condition ```while left < right``` and when is it ```while left <= right```?

Binary search can be used with both of these conditions, but is implemented with a slight difference depending on the one you chose. The ```while left < right``` will fail if the search gets narrowed down to a subset array of two elements, and the target element is one of those two elements. In code, this boils down to left == right, causing the while loop to break. If one uses ```while left < right``` and does not check if left == right before returning, you run the chance of receiving a false negative. 

Here is an example of what might happen when using the psuedocode above, but with ```while left < right```. 

``` 
Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
target = 2 

Iteration 1 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
left = 0, right = 10
middle = 5, element = 6 


Iteration 2
[1, 2, 3, 4, 5]
left = 0, right = 4 
middle = 2, element = 3 

Iteration 3
[1, 2]
left = 0, right = 1 
middle = 0, element = 1 

Iteration 4
left = 0, right = -1 
## LEFT IS NO LONGER LESS THAN RIGHT
## AND LOOP BREAKS
```