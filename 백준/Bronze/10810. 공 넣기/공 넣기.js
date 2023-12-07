const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const list = input.slice(1).map((item) => item.split(' ').map(Number));

const result = Array(N + 1).fill(0);

for (let i = 1; i <= M; i++) {
  const [first, last, ball] = list[i - 1];
  for (let j = first; j <= last; j++) {
    result[j] = ball;
  }
}

console.log(result.slice(1).join(' '));
