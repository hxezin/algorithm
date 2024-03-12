const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const n = Number(input[0])
const triangle = input.slice(1).map((item) => item.split(' ').map(Number))

const dp = triangle

for (let i = n - 2; i >= 0; i--) {
  for (let j = 0; j <= i; j++) {
    dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1])
  }
}

console.log(dp[0][0])
