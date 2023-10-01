def evalRPN(tokens):
    stack = []
    for i in tokens: 
        if i == '*' :
            stack.append(stack.pop() * stack.pop())
        elif i == '+' :
            stack.append(stack.pop() + stack.pop())
        elif i == '/' :
            num1 = stack.pop()
            num2 = stack.pop()
            stack.append(int(num2 / num1))
        elif i == '-' :
            num1 = stack.pop()
            num2 = stack.pop()
            stack.append(num2 - num1)
        else :
            stack.append(int(i))
    return stack[0]

print(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))