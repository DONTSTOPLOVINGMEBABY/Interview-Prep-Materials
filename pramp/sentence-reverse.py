def reverse_words(arr):
  '''
  
  The idea is that we can loop through the arr list and build subarrays for 
  all of the words in the array. 
  
  Once this has completed, we will initialize a blank list ([None] * len(arr)) 
  with the same length of list arr. We can then iterate backwards through the subarray 
  list, and place them in the correct location in our new blank array 
  
    - When it comes time to placing the contents of the subarray into the array, we can 
    use python's unpacking method
  
  ** Edge Cases ** 
 
  a '  ' '  ' '  ' d
 
  d ' ' ' ' ' ' a 
   
   One way we can handle where the word we will be reversing is actually the special string, 
   is by checking to make sure that the string ahead of our current character is the special string 
   
  '''
  
  if len(arr) <= 4 : return arr[::-1] 
  
  SPECIAL_CHAR = ' '
  
  chunks = [[]]
  chunks_ctr = 0
  
  return_array = [None] * len(arr)
  
  for index, letter in enumerate(arr): 
    if index != 0 and index != len(arr) - 1 and letter == SPECIAL_CHAR:
      chunks.append([])
      chunks_ctr += 1 
      if arr[index - 1] == SPECIAL_CHAR and arr[index + 1] == SPECIAL_CHAR:
        chunks[chunks_ctr].append(SPECIAL_CHAR)
    else : 
        chunks[chunks_ctr].append(letter)
  
  return_ctr = 0 
  words_seen = 0 
  print(chunks[::-1])
  for word in chunks[::-1]:
    words_seen +=1 
    for char in word:
      return_array[return_ctr] = char 
      return_ctr += 1 
    
    if words_seen != len(chunks):
      return_ctr += 1
      return_array[return_ctr] = SPECIAL_CHAR 
      return_ctr += 1
  
  return return_array





input_array =  ["p","e","r","f","e","c","t"," ","m","a","k","e","s"," ","p","r","a","c","t","i","c","e"]
reverse_words(input_array)