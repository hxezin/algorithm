const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim()

const N = parseInt(input)
const board = Array.from({ length: N }, () => Array(N).fill(0))
let count = 0

function backtrack(row) {
  // 모든 퀸을 성공적으로 배치했으면 경우의 수를 증가시킴
  if (row === N) {
    count++
    return
  }

  for (let col = 0; col < N; col++) {
    if (isValidPlacement(row, col)) {
      // 현재 위치에 퀸을 배치
      board[row][col] = 1

      // 다음 행으로 이동
      backtrack(row + 1)

      // 백트래킹 -> 퀸을 놓은 위치를 다시 초기화
      board[row][col] = 0
    }
  }
}

// 현재 위치에 퀸을 놓을 수 있는지 확인하는 함수
function isValidPlacement(row, col) {
  // 같은 열에 퀸이 있는지 확인
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 1) {
      return false
    }
  }

  // 왼쪽 위 대각선에 퀸이 있는지 확인
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) {
      return false
    }
  }

  // 오른쪽 위 대각선에 퀸이 있는지 확인
  for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
    if (board[i][j] === 1) {
      return false
    }
  }

  return true
}

backtrack(0)
console.log(count)
