def reverseList(head):
    prev = None 
    next = head.next 
    curr = head 
    while curr:
        curr.next = prev 
        prev = curr 
        curr = next 
        if next:
            next = next.next
    head = curr 
    return head 


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None 

one = Node(1)
two = Node(2)
three = Node(3)
four = Node(4)
five = Node(5)

one.next = two 
two.next = three
three.next = four
four.next = five 


reverseList(one)
# print(one.next.data)
print(two.next.data)
print(three.next.data)
print(four.next.data)