class Node:
    def __init__(self, data):
        self.data = data
        self.left = None 
        self.right = None 
        self.parent = None  


class Tree:
    def __init__(self, root):
        self.root = root 





four = Node(4)
two = Node(2)
one = Node(1)
three = Node(3)
six = Node(6)
five = Node(5)
seven = Node(7)


four.left = two
four.right = six
two.left = one 
two.right = three
six.left = five
six.right = seven 

tree = Tree(four)


def DFS_traversal(tree):
    stack = [tree.root]
    string = ''
    while stack: 
        node = stack.pop()
        if node.right :
            stack.append(node.right)
        if node.left :
            stack.append(node.left)
        string += f'{node.data} --> '
    string += 'Nada'
    print(string)

def BFS_traversal(tree):
    from collections import deque
    queue = deque()
    queue.append(tree.root)
    string = ''
    while queue:

        node = queue.popleft()
        if node.left :
            queue.append(node.left)
        if node.right : 
            queue.append(node.right)
        string += f'{node.data} --> '
    string += 'Nada'
    print(string)


def invert_binary_tree (tree):
    from collections import deque
    queue = deque()
    queue.append(tree.root)
    string = ''
    while queue:
        node = queue.popleft()
        if node.left and node.right:
            temp = node.left 
            node.left = node.right
            node.right = temp 
            queue.append(node.left)
            queue.append(node.right)
        elif node.left and not node.right:
            node.right = node.left
            node.left = None
            queue.append(node.right)
        elif node.right and not node.left:
            node.left = node.right
            node.right = None  
            queue.append(node.left)
        string += f'{node.data} --> '
    string += 'Nada'
    print(string)


def maxDepth(root):
    def findDepth(node):
        if node == None:
            return 0 
        left = findDepth(node.left)
        right = findDepth(node.right)
        return max(left + 1, right + 1)

    return findDepth(root)



DFS_traversal(tree)
BFS_traversal(tree)
maxDepth(tree.root)
# invert_binary_tree(tree)