def checkInclusion(s1, s2):
        s1map = {}
        s2map = {}
        if len(s2) < len(s1) : return False 
        for char in s1: 
            if char in s1map:
                s1map[char] += 1 
            else: 
                s1map[char] = 1
        left, right = 0, 1
        for i in range(len(s1)):
            if s2[i] in s2map:
                s2map[s2[i]] += 1 
            else :
                s2map[s2[i]] = 1 
        left = 0
        right = len(s1) - 1 
        while right < len(s2):
            for i, key in enumerate(s1map):
                if key not in s2map:
                    break
                if key in s2map and s2map[key] != s1map[key]:
                    break 
                if key in s2map and s2map[key] == s1map[key] and i < len(s1map) - 1 : 
                    continue 
                elif key in s2map and s2map[key] == s1map[key] and i == len(s1map) - 1 :
                    return True 
            
 
            if right >= len(s2): break            
            if s2map[s2[left]] - 1 == 0 :
                del s2map[s2[left]]
            else: 
                s2map[s2[left]] -= 1
            left += 1 
            right += 1
            if s2[right] in s2map:
                s2map[s2[right]] += 1 
            else:
                s2map[s2[right]] = 1 
        return False 

            
             
             

s1 = "ab"
s2 = "eidbaooo"


print(checkInclusion(s1, s2))