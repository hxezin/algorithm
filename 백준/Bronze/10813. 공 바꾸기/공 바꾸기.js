const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const list = input.slice(1).map((item) => item.split(' ').map(Number));

const result = Array.from({ length: N + 1 }, (_, index) => index);

for (let i = 1; i <= M; i++) {
  const [basket1, basket2] = list[i - 1];
  const temp = result[basket1];
  result[basket1] = result[basket2];
  result[basket2] = temp;
}

console.log(result.slice(1).join(' '));
