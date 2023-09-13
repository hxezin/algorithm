const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input[0];
const P = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let totalTime = 0;
for (let i = 0; i < N; i++) {
  totalTime += P[i] * (N - i);
}

console.log(totalTime);
