const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

function solution(arr) {
  const n = arr.length;
  const result = Array(n).fill(-1);
  const stack = [];
  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && arr[i] > arr[stack.at(-1)]) {
      const top = stack.pop();
      result[top] = arr[i];
    }
    stack.push(i);
  }

  return result.join(' ');
}

const answer = solution(A);
console.log(answer);
