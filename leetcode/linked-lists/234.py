def isPalindrome(head):
    array = []
    temp = head
    while temp:
        array.append(temp.val)
        temp = temp.next 
    
    def findPalindrome(array):
        print(array)
        if len(array) <= 1 :
            return True 
        elif array[0] != array[-1]:
            return False 
        return findPalindrome(array[1:len(array) - 1])

    return findPalindrome(array)


class Node:
    def __init__(self, data):
        self.val = data 
        self.next = None 


node1 = Node(0)
node2 = Node(0)
node1.next = node2

print(isPalindrome(node1))