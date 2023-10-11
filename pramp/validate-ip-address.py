def validateIP(ip):
  numbers = ip.split('.')
  if len(numbers) != 4 :
    return False 
  
  for chunk in numbers:
    print(chunk)
    if len(chunk) > 1 and chunk[0] == '0' or len(chunk) == 0 :
      return False 
    
    for char in chunk:
      if char < '0' or char > '9' :
        return False 
    
    if int(chunk) < 0 or int(chunk) > 255 :
      return False 
    
  return True 