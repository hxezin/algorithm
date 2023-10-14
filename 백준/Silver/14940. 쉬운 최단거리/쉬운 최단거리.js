const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map((node) => node.split(' ').map(Number));

let targetRow, targetCol;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2) {
      targetRow = i;
      targetCol = j;
      break;
    }
  }
}

const dr = [-1, 1, 0, 0];
const dc = [0, 0, -1, 1];

const dist = Array.from({ length: n }, () => Array(m).fill(0));

const queue = [];
queue.push([targetRow, targetCol]);

while (queue.length > 0) {
  const [row, col] = queue.shift();

  for (let dir = 0; dir < 4; dir++) {
    const newRow = row + dr[dir];
    const newCol = col + dc[dir];

    if (
      newRow >= 0 &&
      newRow < n &&
      newCol >= 0 &&
      newCol < m &&
      map[newRow][newCol] === 1 &&
      dist[newRow][newCol] === 0
    ) {
      dist[newRow][newCol] = dist[row][col] + 1;
      queue.push([newRow, newCol]);
    }
  }
}

const result = [];

for (let i = 0; i < n; i++) {
  const temp = [];
  for (let j = 0; j < m; j++) {
    if (map[i][j] === 2 || map[i][j] === 0) {
      temp.push(0);
    } else if (dist[i][j] === 0) {
      temp.push(-1);
    } else {
      temp.push(dist[i][j]);
    }
  }
  result.push(temp.join(' '));
}

console.log(result.join('\n'));
