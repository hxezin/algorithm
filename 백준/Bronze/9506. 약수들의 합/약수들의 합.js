const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number)

function checkPerfectNumber(n) {
  let sum = 1
  let divisors = [1]

  // n의 약수를 찾고 약수들의 합을 계산
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i
      if (i !== n / i) {
        // i와 n/i가 같지 않은 경우에만 n을 i의 약수로 추가
        sum += n / i
        divisors.push(i, n / i)
      } else {
        // i와 n/i가 같은 경우에는 한 번만 추가
        divisors.push(i)
      }
    }
  }

  divisors.sort((a, b) => a - b)

  if (sum === n) {
    return `${n} = ${divisors.join(' + ')}`
  } else {
    return `${n} is NOT perfect.`
  }
}

for (let i = 0; i < input.length; i++) {
  const n = parseInt(input[i])
  if (n === -1) break
  console.log(checkPerfectNumber(n))
}
