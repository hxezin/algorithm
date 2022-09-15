import sys
from itertools import combinations

input = sys.stdin.readline

n, m = map(int, input().split())
liars = list(map(int, input().split()[1:]))

parties = [list(map(int, input().split()[1:])) \
  for _ in range(m)]

graph = [set() for _ in range(n+1)]
for party in parties:
  if len(party) < 2:
    continue

  all_case = combinations(party, 2)
  for x, y in all_case:
    graph[x].add(y)
    graph[y].add(x)

def dfs(visited, liars, x): # True -> liar를 만남
  result = False
  if x in liars:
    return True
  
  visited[x] = True
  for next_node in graph[x]:
    if visited[next_node]:
      continue
    result = dfs(visited, liars, next_node)
    if result == True:
      return result
  
  return result
  
count = 0
for party in parties:
  for player in party:
    visited = [False] * (n+1)
    if dfs(visited, liars, player):
      break
  else:
    count += 1

print(count)