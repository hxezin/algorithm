const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const map = input.slice(1).map((height) => height.split('').map(Number));

const dr = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visited = Array.from({ length: N }, () => Array(N).fill(false));
const complexes = [];
let complexCount = 0;

function dfs(x, y, complex) {
  visited[x][y] = true;
  complexes[complex]++;

  for (let i = 0; i < 4; i++) {
    const dx = x + dr[i][0];
    const dy = y + dr[i][1];
    if (
      dx >= 0 &&
      dx < N &&
      dy >= 0 &&
      dy < N &&
      map[dx][dy] === 1 &&
      !visited[dx][dy]
    ) {
      dfs(dx, dy, complex);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      complexes.push(0);
      dfs(i, j, complexCount);
      complexCount++;
    }
  }
}

console.log(complexCount);
console.log(complexes.sort((a, b) => a - b).join('\n'));
