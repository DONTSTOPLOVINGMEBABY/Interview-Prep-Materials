def shortestCellPath(grid, sr, sc, tr, tc):
  from collections import deque 
  ROWS, COLS = len(grid), len(grid[0])
  queue = deque()
  visited = set()
  directions = [[1, 0], [-1, 0], [0, 1], [0, -1]] # represents up down left right 
  ## we need to add our starting row and starting column to the queue 
  queue.append((sr, sc))
  visited.add((sr, sc))
  levels = 0 
  while queue : 
    
    # we want to generate all possible moves for each level of the queue 
    for _ in range(len(queue)):
      position = queue.popleft()
      r, c = position[0], position[1]
      
      if r == tr and c == tc : 
        return levels 
      
      for direction in directions:
        tempR, tempC = r, c
        tempR += direction[0] 
        tempC += direction[1]
      
        if tempR >= 0 and tempR < ROWS and tempC >= 0 and tempC < COLS and (tempR, tempC) not in visited and grid[tempR][tempC] == 1:
          visited.add((tempR, tempC))
          queue.append((tempR, tempC))
    
    levels += 1 
  
  return -1 
      
"""

Shortest Cell Path
In a given grid of 0s and 1s, we have some starting row and column sr, sc and a target row and column tr, tc. Return the length of the shortest path from sr, sc to tr, tc that walks along 1 values only.

Each location in the path, including the start and the end, must be a 1. Each subsequent location in the path must be 4-directionally adjacent to the previous location.

It is guaranteed that grid[sr][sc] = grid[tr][tc] = 1, and the starting and target positions are different.

If the task is impossible, return -1.

Examples:

input:
grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: 8
(The lines below represent this grid:)
1111
0001
1111

grid = [[1, 1, 1, 1], [0, 0, 0, 1], [1, 0, 1, 1]]
sr = 0, sc = 0, tr = 2, tc = 0
output: -1
(The lines below represent this grid:)
1111
0001
1011
Constraints:

[time limit] 5000ms
[input] array.array.integer grid
1 ≤ arr.length = arr[i].length ≤ 10
[input] integer sr
[input] integer sc
[input] integer tr
[input] integer tc
All sr, sc, tr, tc are valid locations in the grid, grid[sr][sc] = grid[tr][tc] = 1, and (sr, sc) != (tr, tc).
[output] integer

"""