const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

const [N, K] = input

let divisors = []
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    divisors.push(i)
  }
}
if (divisors.length < K) {
  console.log(0)
} else {
  console.log(divisors[K - 1])
}
