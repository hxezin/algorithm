const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim()

let totalTime = 0

for (let i = 0; i < input.length; i++) {
  const char = input[i]

  if (char >= 'A' && char <= 'C') {
    totalTime += 3
  } else if (char >= 'D' && char <= 'F') {
    totalTime += 4
  } else if (char >= 'G' && char <= 'I') {
    totalTime += 5
  } else if (char >= 'J' && char <= 'L') {
    totalTime += 6
  } else if (char >= 'M' && char <= 'O') {
    totalTime += 7
  } else if (char >= 'P' && char <= 'S') {
    totalTime += 8
  } else if (char >= 'T' && char <= 'V') {
    totalTime += 9
  } else if (char >= 'W' && char <= 'Z') {
    totalTime += 10
  }
}

console.log(totalTime)
