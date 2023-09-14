const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
let A = input[1].split(' ').map(Number);
let B = input[2].split(' ').map(Number);

function isSame(a, b) {
  for (let i = 0; i < N; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function solution() {
  if (isSame(A, B)) return 1;

  for (let i = A.length; i > 0; i--) {
    let noswap = true;
    for (let j = 0; j < i - 1; j++) {
      if (A[j] > A[j + 1]) {
        [A[j + 1], A[j]] = [A[j], A[j + 1]];
        if (A[j] === B[j] && isSame(A, B)) return 1;
        noswap = false;
      }
    }

    if (noswap) {
      break;
    }
  }

  return 0;
}

const answer = solution();
console.log(answer);
