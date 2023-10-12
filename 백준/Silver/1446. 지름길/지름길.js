const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, D] = input[0].split(' ').map(Number);
const shortcuts = input
  .slice(1)
  .map((shortcut) => shortcut.split(' ').map(Number));

function solution(N, D, shortcuts) {
  const distances = Array(D + 1).fill(0);

  for (let i = 1; i <= D; i++) {
    distances[i] = distances[i - 1] + 1;

    for (let j = 0; j < N; j++) {
      if (i === shortcuts[j][1]) {
        distances[i] = Math.min(
          distances[i],
          distances[shortcuts[j][0]] + shortcuts[j][2]
        );
      }
    }
  }

  return distances[D];
}

const answer = solution(N, D, shortcuts);
console.log(answer);
