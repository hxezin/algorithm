const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [N, K] = input;
let result = 0;
const queue = [];
queue.push([N, 0]);
const visited = Array(100001).fill(false);
visited[N] = true;

while (queue.length) {
  const [x, second] = queue.shift();

  if (x === K) {
    result = second;
    break;
  }

  [x - 1, x + 1, x * 2].forEach((nx) => {
    if (nx < 0 || nx > 100000) return;
    if (!visited[nx]) {
      visited[nx] = true;
      queue.push([nx, second + 1]);
    }
  });
}

console.log(result);
