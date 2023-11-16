import sys

input = sys.stdin.readline
n, r, c = map(int, input().split())

def f(sr, sc, er, ec):
  global r, c
  total_count = (er - sr + 1) * (ec - sc + 1)
  each_block_count = total_count // 4

  midr = (sr + er) // 2
  midc = (sc + ec) // 2

  # r, c가 영역 안에 있어야만 루프를 돌 필요가 있음
  if not (sr <= r <= er and sc <= c <= ec):
    return 10e9

  if (sr == er and ec == sc):
    return 1

  return min(
    f(sr, sc, midr, midc), 
    each_block_count + f(sr, midc + 1, midr, ec), 
    each_block_count * 2 + f(midr + 1, sc, er, midc), 
    each_block_count * 3 + f(midr + 1, midc + 1, er, ec)
  )


print(f(0, 0, 2**n-1, 2**n-1) - 1)
