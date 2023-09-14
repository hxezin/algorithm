const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

function solution() {
  for (let i = N; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (A[j] > A[j + 1]) {
        [A[j + 1], A[j]] = [A[j], A[j + 1]];
        K--;

        if (K === 0) return A.join(' ');
      }
    }
  }

  return -1;
}

const answer = solution();
console.log(answer);
