class Node :
    def __init__(self, data, key) :
        self.data = data 
        self.key = key
        self.next = None
        self.prev = None 
    
    def __str__(self):
        string = f'Data : {self.data}, Key: {self.key}'
        return string

class DoublyLinkedList :
    def __init__(self) :
        self.head = None 
        self.tail = None
        self.elements = 0 

    def append(self, data, key):
        self.elements += 1 
        newNode = Node(data, key)
        if self.head == None:
            self.head = newNode
            self.tail = newNode
            return newNode
        oldTail = self.tail 
        oldTail.next = newNode 
        newNode.prev = oldTail
        self.tail = newNode
        return newNode
    
    # def prepend(self, data):
    #     self.elements += 1 
    #     newNode = Node(data)
    #     if self.head == None: 
    #         self.head = newNode
    #         self.tail = newNode
    #         return
    #     oldHead = self.head
    #     oldHead.prev = newNode
    #     newNode.next = oldHead
    #     self.head = newNode

    def delete(self, node):
        if self.head == None : return 
        self.elements -= 1 
        if self.head == self.tail == node: 
            temp = node 
            self.head = None 
            self.tail = None 
            return temp
        elif self.tail == node: 
            temp = self.tail
            oldTail = self.tail 
            self.tail = oldTail.prev
            oldTail.prev.next = None 
            return temp
        elif self.head == node:
            temp = self.head 
            oldHead = self.head 
            self.head = oldHead.next
            oldHead.next.prev = None 
            return temp
        else: 
            temp = node 
            node.prev.next = node.next 
            node.next.prev = node.prev 
            return node 

    def deleteOldest(self):
        if self.head == None : return 
        self.elements -= 1 
        if self.head == self.tail: 
            temp = self.head 
            self.head = None 
            self.tail = None 
            return temp 
        else : 
            oldHead = self.head 
            self.head = oldHead.next
            oldHead.next.prev = None 
            return oldHead

    def peekTop (self) :
        return self.head 
    
    def peekEnd (self) :
        return self.tail
    
    def __str__(self):
        str = 'Head -> '
        temp = self.head 
        while (temp) :
            str += f'<-- {temp.data} --> '
            temp = temp.next 
        str += '<-- Tail'
        return str


class LRUCache :
    def __init__(self, capacity):
        self.capacity = capacity
        self.map = {}
        self.dll = DoublyLinkedList()

    def put(self, key, value):
        if key in self.map:
            self.dll.delete(self.map[key])
            self.map[key] = self.dll.append(value, key)
        elif self.dll.elements == self.capacity:
            deletedNode = self.dll.deleteOldest()
            del self.map[deletedNode.key]
            newNode = self.dll.append(value, key)
            self.map[key] = newNode
        else:
            self.map[key] = self.dll.append(value, key)

    def get(self, key):
        if key not in self.map:
            return -1
        deletedNode = self.dll.delete(self.map[key])
        holdValue = deletedNode.data
        newNode = self.dll.append(holdValue, key)
        self.map[key] = newNode
        return holdValue





'''
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

[[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]
'''

# nodes = []
# dll = DoublyLinkedList()
# for i in range(10):
#     newNode = dll.append(i)
#     nodes.append(newNode)
#     print(dll)
# for i in nodes:
#     dll.delete(i)
#     print(dll)

firstCache = LRUCache(2)
firstCache.put(1, 1)
firstCache.put(2, 2)
print(firstCache.get(1))
firstCache.put(3, 3)
print(firstCache.get(2))
firstCache.put(4, 4)
print(firstCache.get(1))
print(firstCache.get(3))
print(firstCache.get(4))




print("\n\nTEST 2\n\n")

myCache = LRUCache(2)
myCache.put(2, 1)
myCache.put(1, 1)
myCache.put(2, 3)
myCache.put(4, 1)
print(myCache.get(1))
print(myCache.get(2))



# myCache = LRUCache(2)
# myCache.put(2, 1)
# myCache.sanity_check()
# myCache.put(1, 1)
# myCache.sanity_check()
# myCache.put(2, 3)
# myCache.sanity_check()
# myCache.put(4, 1)
# myCache.sanity_check()
# print(myCache.get(1))
# myCache.sanity_check()
# print(myCache.get(2))
# myCache.sanity_check()














# class LRUCache:

#     def __init__(self, capacity):
#         self.capacity = capacity 
#         self.map = {}
#         self.dll = DoublyLinkedList()
        
#     def get(self, key):
#         if key not in self.map : return -1 
#         data = self.map[key].data
#         self.dll.delete(self.map[key])
#         replacementNode = self.dll.append(data, key)
#         self.map[key] = replacementNode
#         return data

#     def put(self, key, value):
#         if key in self.map and self.dll.elements == self.capacity:
#             self.dll.delete(self.map[key])
#             replacementNode = self.dll.append(value, key)
#             self.map[key] = replacementNode
#         elif self.dll.elements == self.capacity:
#             oldNode = self.dll.deleteOldest()
#             newNode = self.dll.append(value, key)
#             self.map[key] = newNode
#             del self.map[oldNode.key]
#         else : 
#             newNode = self.dll.append(value, key)
#             self.map[key] = newNode

#     def sanity_check(self):
#         print(self.dll)
#         print(self.map)
