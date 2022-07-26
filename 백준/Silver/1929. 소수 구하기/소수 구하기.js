const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [M, N] = input;

let temp = Array(N + 1).fill(true);
temp[0] = false;
temp[1] = false;

for (let i = 2; i <= N; i++) {
  if (!temp[i]) {
    continue;
  }
  for (let j = i * 2; j <= N; j += i) {
    temp[j] = false;
  }
}

let result = [];
for (let k = M; k <= N; k++) {
  if (temp[k]) {
    result.push(k);
  }
}

console.log(result.join("\n"));
