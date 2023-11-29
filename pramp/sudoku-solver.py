def getCandidates(board, row, col):
  candidates = []
  
  for num in range(1, 10):
    strang = str(num)
    collision = False 
    for i in range(0, 9):
      print(board[(row - row % 3) + (i // 3)][(col - col % 3) + i % 3], board[row][i], board[i][col])
      print((row - row % 3) + (i // 3), (col - col % 3) + i % 3)
      if board[row][i] == strang or board[i][col] == strang or board[(row - row % 3) + (i // 3)][(col - col % 3) + i % 3] == strang :
        collision = True 
        break
    
    if not collision :
      candidates.append(strang)
  
  return candidates
  




def sudoku_solve(board):
  row = -1 
  col = -1
  candidates = None 
  
  for r in range(0, 9):
    for c in range(0, 9):
      if board[r][c] == '.':
        newCandidates = getCandidates(board, r, c)
        if candidates == None or len(newCandidates) < len(candidates):
          candidates = newCandidates 
          row = r 
          col = c 
          
  if candidates == None : 
    return True 
  
  
  for val in candidates:
    board[row][col] = val 
    if (sudoku_solve(board)):
      return True 
    board[row][col] = '.'
  
  return False 




board = [
[".",".",".","7",".",".","3",".","1"], 
["3",".",".","9",".",".",".",".","."],
[".","4",".","3","1",".","2",".","."],
[".","6",".","4",".",".","5",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".","1",".",".","8",".","4","."],
[".",".","6",".","2","1",".","5","."],
[".",".",".",".",".","9",".",".","8"],
["8",".","5",".",".","4",".",".","."],
]

sudoku_solve(board)

"""
[".",".",".","7",".",".","3",".","1"]
["3",".",".","9",".",".",".",".","."]
[".","4",".","3","1",".","2",".","."]
[".","6",".","4",".",".","5",".","."]
[".",".",".",".",".",".",".",".","."]
[".",".","1",".",".","8",".","4","."]
[".",".","6",".","2","1",".","5","."]
[".",".",".",".",".","9",".",".","8"]
["8",".","5",".",".","4",".",".","."]



"""