const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();

const neighbor = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let M,
  N,
  K,
  map = 0;

let result = [];

for (let i = 0; i < T; i++) {
  [M, N, K] = input.shift().split(" ");
  map = Array.from({ length: N }, () => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    let [x, y] = input.shift().split(" ");
    map[y][x] = 1;
  }

  result.push(solution(map));
}

function solution(map) {
  let worm = 0;

  const bfs = (x, y) => {
    const queue = [[x, y]];

    while (queue.length) {
      const [x, y] = queue.shift();

      if (!map[x][y]) continue;
      map[x][y] = 0;

      for (let i = 0; i < 4; i++) {
        let nx = x + neighbor[i][0];
        let ny = y + neighbor[i][1];

        if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
        if (map[nx][ny]) queue.push([nx, ny]);
      }
    }
  };

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (map[x][y]) {
        bfs(x, y);
        worm++;
      }
    }
  }

  return worm;
}

console.log(result.join("\n"));
