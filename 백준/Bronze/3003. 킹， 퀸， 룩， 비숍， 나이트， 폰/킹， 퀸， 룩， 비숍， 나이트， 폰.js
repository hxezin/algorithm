const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

const pieceCounts = [1, 1, 2, 2, 2, 8]
const result = pieceCounts.map((piece, idx) => piece - input[idx])

console.log(result.join(' '))
