def find_pairs_with_given_difference(arr, k):
  hashmap = {}
  output_array = []
  
  
  if len(arr) < 2 : 
    return []
  
  # O(2n) time and O(n) space
  
  for element in arr :
    hashmap[element] = True 
  
  for element in arr:
    target = element + k 
    if target in hashmap:
      output_array.append([target, element])
  
  return output_array   

# hashmap[ [1, 0] ] -->

#{(1,2): int} 

# 
'''
input:  arr = [0, -1, -2, 2, 1, 0, -1], k = 1
output: [[1, 0], [0, -1], [-1, -2], [2, 1]]

x - y = k 
1 - 0 = 1 

x - y = k 
x = k + y 

x = element 

map = {}
output_array = []

for element in input:
  map[element] = true 


for element in input:
  target = element + k 
  if target in map:
    output_array.append([target, element])
 
'''