const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [M, N] = input.shift().split(" ");
const box = [];

input.map((el) => {
  box.push(el.split(" "));
});

const neighbor = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let day = 0;
let unripe = 0;
const queue = [];

for (let x = 0; x < N; x++) {
  for (let y = 0; y < M; y++) {
    if (box[x][y] === "0") {
      unripe++;
    }
    if (box[x][y] === "1") {
      queue.push([x, y, 0]);
    }
  }
}

let idx = 0;

while (queue.length > idx) {
  let [x, y, ripe] = queue[idx];

  for (let i = 0; i < 4; i++) {
    let nx = x + neighbor[i][0];
    let ny = y + neighbor[i][1];

    if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
    if (box[nx][ny] === "0") {
      box[nx][ny] = "1";
      queue.push([nx, ny, ripe + 1]);
      unripe--;
    }
  }

  day = ripe;
  idx++;
}

console.log(unripe ? -1 : day);
