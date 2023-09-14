const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [A, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

function solution() {
  let noSwaps;

  for (let i = A; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        K--;
        noSwaps = false;

        if (K === 0) {
          return [arr[j], arr[j + 1]].join(' ');
        }
      }
    }

    if (noSwaps) return -1;
  }
}

const answer = solution();
console.log(answer);
