const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const A = input.slice(1).map(Number);

function solution(N, K, arr) {
  let count = 0;

  for (let i = N - 1; i >= 0; i--) {
    while (K >= arr[i]) {
      K -= arr[i];
      count++;
    }
  }

  return count;
}

const answer = solution(N, K, A);
console.log(answer);
