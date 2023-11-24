const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const tests = input.slice(1).map((test) => test.split(' ').map(Number));

const result = [];

for (let i = 0; i < T; i++) {
  const [M, N, x, y] = tests[i];
  let temp = x;
  let years = -1;

  while (temp <= M * N) {
    if (((temp - 1) % N) + 1 === y) {
      years = temp;
      break;
    }

    temp += M;
  }

  result.push(years);
}

console.log(result.join('\n'));
