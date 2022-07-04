import sys

input = sys.stdin.readline
n, k = map(int, input().split())
attack = list(map(int, input().split()))
person = list(map(int, input().split()))

answer = 0

def solve(hp, before, saved, visited):
  global answer
  answer = max(answer, saved)
  for i in range(n):
    hp_loss = before + attack[i] 

    if i not in visited and hp - hp_loss >= 0:
      solve(hp - hp_loss, hp_loss, saved + person[i], visited | {i})

solve(k, 0, 0, set())
print(answer)