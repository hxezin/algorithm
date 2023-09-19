const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

function solution() {
  const memo = {};
  const sortedA = A.slice(0).sort((a, b) => a - b);
  let count = 0;

  A.forEach((el, idx) => (memo[el] = idx));

  for (let i = N - 1; i > 0; i--) {
    if (sortedA[i] === A[i]) continue;

    let temp = [A[i], sortedA[i]];

    [A[i], A[memo[sortedA[i]]]] = [A[memo[sortedA[i]]], A[i]];

    [memo[temp[0]], memo[temp[1]]] = [memo[temp[1]], memo[temp[0]]];

    count++;

    if (count === K) {
      return temp.join(' ');
    }
  }

  return -1;
}

const answer = solution();
console.log(answer);
