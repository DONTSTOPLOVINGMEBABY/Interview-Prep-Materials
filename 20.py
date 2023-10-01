def isValid(s) :
    stack = []
    for char in s:
        if char == ']' and stack.pop() != '[':
            return False 
        elif char == '}' and stack.pop() != '{':
            return False 
        elif char == ')' and stack.pop() != '(':
            return False
        else :
            stack.append(char)
    if len(stack) > 0 : return False 
    return True

isValid("{[]}")