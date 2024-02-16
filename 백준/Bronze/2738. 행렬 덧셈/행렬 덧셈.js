const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number)
const matrixA = input.slice(1, N + 1).map((row) => row.split(' ').map(Number))
const matrixB = input.slice(N + 1).map((row) => row.split(' ').map(Number))

const answer = []
for (let i = 0; i < N; i++) {
  const row = []
  for (let j = 0; j < M; j++) {
    row.push(matrixA[i][j] + matrixB[i][j])
  }
  answer.push(row)
}

console.log(answer.map((row) => row.join(' ')).join('\n'))
