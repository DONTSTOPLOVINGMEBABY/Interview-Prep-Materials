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
