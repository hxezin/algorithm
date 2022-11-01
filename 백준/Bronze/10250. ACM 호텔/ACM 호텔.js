const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
const result = [];

for (let i = 0; i < T; i++) {
  const [H, W, N] = input.shift().split(" ");
  const floor = N % H === 0 ? H : N % H;
  const unit = N % H === 0 ? Math.floor(N / H) : Math.floor(N / H) + 1;

  result.push(floor * 100 + unit);
}

console.log(result.join("\n"));
