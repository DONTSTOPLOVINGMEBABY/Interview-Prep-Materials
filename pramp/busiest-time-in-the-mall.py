def find_busiest_period(data):
  '''
  Find the net inflow/outflow for each period
  by iterating through the array and storing the 
  net value of each stamp in a hashmap in the format 
  hashmap[timestamp] = net_value 
  
  Iterate through the array and keep track of the total amount of people
  that we have seen. Everytime that we hit a new high for total amount of people, 
  we will update the maxPeople variable to reflect this new high and we will update
  the timestamp to the current timestamp that gave us this new high
  
    - O(n) time and O(n) space 
  
  
  ** some edge cases ** 
   We will have an edge case after we finish iterating through our for loop and 
   what we will have to do is perform the same sequence of operations that we did 
   in the loop to the last element in the data array
   
    - O(n) time and O(1) space 
     
   finally, we will return the timestamp 
   
   Final time complexity is O(n) and final space is O(n)
  '''
  
  hashmap = {}
  for entry in data:
    timestamp = entry[0]
    people = entry[1]
    inOut = entry[2]
    
    if inOut == 0:
      people *= -1 
      
    if timestamp in hashmap:
      hashmap[timestamp] += people 
    else:
      hashmap[timestamp] = people 
  

  currPeople = 0 
  return_timeStamp = -1 
  maxPeople = -1 
  
  for index, entry in enumerate(data):
    timestamp = entry[0]
    if len(data) - 1 != index and timestamp != data[index + 1][0]:
      people = hashmap[timestamp]
      currPeople += people 
      if currPeople > maxPeople :
        maxPeople = currPeople 
        return_timeStamp = timestamp 
    
  timestamp = data[-1][0]
  people = hashmap[timestamp]
  currPeople += people 
  if currPeople > maxPeople :
    maxPeople = currPeople 
    return_timeStamp = timestamp 
  
  return return_timeStamp 