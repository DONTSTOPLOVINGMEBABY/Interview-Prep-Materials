# def carFleet(target, position, speed) :
#     posToSpeed = {}
#     stack = []
#     for i in range(len(position)):
#         posToSpeed[position[i]] = speed[i]
#     position.sort()
    
#     for pos in position:
#         calc = (target - pos) / posToSpeed[pos]
#         print(calc)
#         if stack and calc < stack[-1]:
#             stack.append(calc)
#         else: 
#             stack.append(calc)

#     return len(stack)



def carFleet(target, position, speed):
        # O(nlogn) time O(n) space
        p2s = {}
        stack = []
        for i, pos in enumerate(position):
            p2s[pos] = speed[i]
        position.sort()
        for pos in position[::-1]:
            stack.append((target - pos) / p2s[pos])
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()
        return len(position)

# carFleet(12, [])

carFleet(12, [10,8,0,5,3], [2,4,1,1,3])