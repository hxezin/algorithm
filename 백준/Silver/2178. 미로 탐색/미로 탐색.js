const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const maze = input.slice(1).map((el) => el.split('').map(Number));

function solution(N, M, maze) {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue = [{ x: 0, y: 0, distance: 1 }];

  while (queue.length > 0) {
    const current = queue.shift();
    const { x, y, distance } = current;

    if (x === N - 1 && y === M - 1) {
      return distance;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && maze[nx][ny] === 1) {
        maze[nx][ny] = 0;
        queue.push({ x: nx, y: ny, distance: distance + 1 });
      }
    }
  }
}

const answer = solution(N, M, maze);
console.log(answer);
