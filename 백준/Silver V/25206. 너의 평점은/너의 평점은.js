const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const gradeToPoint = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
  P: null,
}

let totalCredits = 0
let totalGradePoints = 0

for (let i = 0; i < 20; i++) {
  const [subject, credit, grade] = input[i].split(' ')

  if (grade !== 'P') {
    totalCredits += parseInt(credit)
    totalGradePoints += parseInt(credit) * gradeToPoint[grade]
  }
}

console.log(totalGradePoints / totalCredits)
