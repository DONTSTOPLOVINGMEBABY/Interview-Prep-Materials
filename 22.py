# def generateParenthesis(n) :
#         stack = []
#         res = []

#         def backtrack(openN, closedN):
#             if openN == closedN == n:
#                 res.append("".join(stack))
#                 return

#             if openN < n:
#                 stack.append("(")
#                 backtrack(openN + 1, closedN)
#                 stack.pop()
#             if closedN < openN:
#                 stack.append(")")
#                 backtrack(openN, closedN + 1)
#                 stack.pop()

#         backtrack(0, 0)
#         return res

# generateParenthesis(3)


def generateParenthesis(n) :
    stack = []
    output = []

    def backtrack(openN, closedN, string):
        if openN == closedN == n :
            # output.append("".join(stack))
            output.append(string)
            return 
        
        if (openN < n) :
            # stack.append('(')
            string += '('
            backtrack(openN + 1, closedN, string)
            print('execute')
            string = string[:-1]
            # stack.pop()
        
        if (closedN < openN):
            string += ')'
            # stack.append(')')
            backtrack(openN, closedN + 1, string)
            string = string[:-1]
            # stack.pop()
        
    backtrack(0, 0, '')
    return output 

generateParenthesis(3)