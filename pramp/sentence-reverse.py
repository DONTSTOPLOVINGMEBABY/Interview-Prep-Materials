# def reverse_words(arr):
#   stack = []
#   word = []
  
#   for char in arr :
    
#     if char != ' ':
#       word.append(char)
#       continue 
#     else:
#       stack.append(word)
#       word = []
#       stack.append([' '])
  
#   print(stack)
#   print(word)
#   if word :
#     stack.append(word)
    
#   result = []
#   while stack : 
#     result.extend(stack.pop())
  
#   return result
    

def reverse_words(arr):
  
  n = len(arr)
  reverseInPlace(arr, 0, n - 1)
  wordStart = None 
  
  print(arr)
  
  for index in range(n): 
    
    if arr[index] == ' ':
      if wordStart != None :
        reverseInPlace(arr, wordStart, index - 1)
        wordStart = None 
    elif index == n - 1 : 
      if wordStart != None :
        reverseInPlace(arr, wordStart, n -1)
    else:
      if wordStart == None :
        wordStart = index 
  
  return arr

def reverseInPlace(arr, start, finish): 
  tmp = None 
  while start < finish :
    temp = arr[start]
    arr[start] = arr[finish]
    arr[finish] = temp 
    start += 1 
    finish -= 1  


reverse_words(["a"," "," ","b"])


# arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
# 'm', 'a', 'k', 'e', 's', '  ',
# 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]


# print(reverse_words(arr))