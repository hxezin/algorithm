const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.slice(0, 2).map(Number);
const S = input[2];

let count = 0;

for (let i = 0; i < M - 2 * N; i++) {
  if (S[i] === 'I' && S[i + 1] === 'O' && S[i + 2] === 'I') {
    let valid = true;

    for (let j = 3; j < 2 * N; j += 2) {
      if (S[i + j] !== 'O' || S[i + j + 1] !== 'I') {
        valid = false;
        break;
      }
    }

    if (valid) {
      count++;
    }
  }
}

console.log(count);
