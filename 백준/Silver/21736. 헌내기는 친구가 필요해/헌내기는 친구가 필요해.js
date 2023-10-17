const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const campus = input.slice(1).map((el) => el.split(''));

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let count = 0;
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (campus[i][j] === 'I') {
      queue.push([i, j]);
    }
  }
}

while (queue.length > 0) {
  let [x, y] = queue.shift();

  if (campus[x][y] === 'P') count++;

  for (let [dx, dy] of dir) {
    let nx = x + dx;
    let ny = y + dy;

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < M &&
      !visited[nx][ny] &&
      campus[nx][ny] !== 'X'
    ) {
      queue.push([nx, ny]);
      visited[nx][ny] = true;
    }
  }
}

if (count === 0) {
  console.log('TT');
} else {
  console.log(count);
}
