const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.slice(0, 2).map(Number);
const S = input[2];

let result = 0;

for (let i = 0; i < M; i++) {
  let count = 0;

  if (S[i] === 'I') {
    while (S[i + 1] === 'O' && S[i + 2] === 'I') {
      count++;
      if (count === N) {
        result++;
        count--;
      }
      i += 2;
    }
  }
}

console.log(result);
