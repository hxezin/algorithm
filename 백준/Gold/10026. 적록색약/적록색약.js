const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = parseInt(input[0]);
const grid = input.slice(1).map((line) => line.split(''));

function solution(colorBlind) {
  const visited = new Array(N).fill(null).map(() => new Array(N).fill(false));

  function dfs(x, y, color) {
    if (x < 0 || x >= N || y < 0 || y >= N || visited[x][y]) {
      return;
    }

    const currentColor = grid[x][y];

    if (
      colorBlind &&
      (currentColor === 'R' || currentColor === 'G') &&
      (color === 'R' || color === 'G')
    ) {
      visited[x][y] = true;
      dfs(x + 1, y, currentColor);
      dfs(x - 1, y, currentColor);
      dfs(x, y + 1, currentColor);
      dfs(x, y - 1, currentColor);
    } else if (currentColor === color) {
      visited[x][y] = true;
      dfs(x + 1, y, currentColor);
      dfs(x - 1, y, currentColor);
      dfs(x, y + 1, currentColor);
      dfs(x, y - 1, currentColor);
    }
  }

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        dfs(i, j, grid[i][j]);
        count++;
      }
    }
  }

  return count;
}

const countNormal = solution(false);
const countColorBlind = solution(true);

console.log(`${countNormal} ${countColorBlind}`);
