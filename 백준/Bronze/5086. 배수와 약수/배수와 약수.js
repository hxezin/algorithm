const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

input.forEach((test) => {
  const [num1, num2] = test.split(' ').map(Number)

  if (num1 === 0 && num2 === 0) return
  if (num2 % num1 === 0) {
    console.log('factor')
  } else if (num1 % num2 === 0) {
    console.log('multiple')
  } else {
    console.log('neither')
  }
})
