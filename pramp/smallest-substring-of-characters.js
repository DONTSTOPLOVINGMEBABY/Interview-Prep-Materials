function getShortestUniqueSubstring(arr, str) {
  let hashmapOne = {}
  let smallest = ''
  let curr = ''
  let character_set = new Set(arr)
  for (let character of arr){
    hashmapOne[character] = false 
  }
  let ptr1 = 0 
  let ptr2 = 0
  
  while (ptr1 < str.length){
    if (ptr2 === str.length){
      resetHashmap(hashmapOne)
      ptr1 += 1 
      ptr2 = ptr1 
      continue 
    }
    let first = str[ptr1]
    let second = str[ptr2]

    if (!character_set.has(first)){
      ptr1 += 1 
      ptr2 = ptr1 
      continue 
    }
    if (!character_set.has(second)){
      ptr2 += 1 
      curr += second
      continue 
    }
    curr += second
    hashmapOne[second] = true 
    let allCharsSeen = true
    for (let key of Object.keys(hashmapOne)){
      if (hashmapOne[key] === false) { 
        allCharsSeen = false
        break
      }
    }
    if (!allCharsSeen){
      ptr2 += 1 
      continue 
    }
    if (smallest.length === 0){
      smallest = curr
    }
    else if (curr.length < smallest.length){
      smallest = curr
    }
    resetHashmap(hashmapOne)
    ptr1 += 1 
    ptr2 = ptr1
    curr = ''
  }
  return smallest
}

function resetHashmap (hashmap) {
    for (let key of Object.keys(hashmap)){
      hashmap[key] = false
    }
}
 
let first = ["A","B","C"]
let second = "ADOBECODEBANCDDD"
console.log(getShortestUniqueSubstring(first, second))