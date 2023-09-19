const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

function solution() {
  let count = 0;

  for (let i = 1; i < N; i++) {
    let current = A[i];
    let temp;
    let swap = false;

    for (temp = i - 1; temp >= 0 && A[temp] > current; temp--) {
      if (count === K) {
        return A[temp + 1];
      }

      A[temp + 1] = A[temp];
      count++;
      swap = true;
    }

    if (swap) {
      A[temp + 1] = current;
      count++;
    }
  }

  return -1;
}

const answer = solution();
console.log(answer);
