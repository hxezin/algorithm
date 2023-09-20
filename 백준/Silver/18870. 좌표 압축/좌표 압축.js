const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const X = input[1].split(' ').map(Number);

function solution() {
  const sortedX = [...new Set(X)].sort((a, b) => a - b);
  const compressedX = {};

  for (let i = 0; i < N; i++) {
    compressedX[sortedX[i]] = i;
  }

  const result = X.map((el) => compressedX[el]);
  return result.join(' ');
}

const answer = solution();
console.log(answer);
