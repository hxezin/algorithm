const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const N = input.slice(1).map(Number);

function findP(N) {
  const p = [1, 1, 1];

  for (let i = 3; i < N; i++) {
    p[i] = p[i - 2] + p[i - 3];
  }

  return p[N - 1];
}

const result = [];
for (let i = 0; i < T; i++) {
  result.push(findP(N[i]));
}

console.log(result.join('\n'));
