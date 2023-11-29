class TreeNode:
    def __init__(self, val):
        self.val = val 
        self.left = None 
        self.right = None 

class Tree:
    def __init__(self, root):
        self.root = root 

f = TreeNode("f")
b = TreeNode("b")
a = TreeNode("a")
d = TreeNode("d")
c = TreeNode("c")
e = TreeNode("e")
g = TreeNode("g")
i = TreeNode("i")
h = TreeNode("h")

f.left = b 
f.right = g 
b.left = a 
b.right = d 
d.left = c 
d.right = e 
g.right = i 
i.left = h 
tree = Tree(f)


def preOrderTraversal(root):
    pass
    '''
    expected output -> f -> b -> a -> d -> c -> e -> g -> i -> h 
    '''

def inOrderTraversal(root):
    pass
    '''
    expected output -> a -> b -> c -> d -> e -> f -> g -> h -> i 
    '''

def postOrderTraversal(root):
    pass
    '''
    expected output -> a -> c -> e -> d -> b -> h -> i -> g -> f 
    '''

def dfsPreOrder(root):
    stack = []
    visited = set()
    stack.append(root)
    visited.add(root.val)
    while stack :
        item = stack.pop()
        print(item.val)
        if item.right and item.right not in visited:
            stack.append(item.right)
            visited.add(item.right)
        if item.left and item.left not in visited:
            stack.append(item.left)
            visited.add(item.left)
    

dfsPreOrder(tree.root)


    


