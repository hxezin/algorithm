const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

function solution() {
  let count = 0;
  for (let i = N - 1; i > 0; i--) {
    let temp = i;
    for (let j = i - 1; j >= 0; j--) {
      if (A[j] > A[temp]) {
        temp = j;
      }
    }
    if (temp !== i) {
      [A[temp], A[i]] = [A[i], A[temp]];
      count++;

      if (count === K) {
        return A.join(' ');
      }
    }
  }

  return -1;
}

const answer = solution();
console.log(answer);
