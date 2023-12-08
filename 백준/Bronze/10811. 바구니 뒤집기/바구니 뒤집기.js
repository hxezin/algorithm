const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const list = input.slice(1).map((item) => item.split(' ').map(Number));

let result = Array.from({ length: N + 1 }, (_, idx) => idx);

for (let i = 0; i < M; i++) {
  const [first, last] = list[i];
  const reverse = result.slice(first, last + 1).reverse();
  result = [...result.slice(0, first), ...reverse, ...result.slice(last + 1)];
}

console.log(result.slice(1).join(' '));
