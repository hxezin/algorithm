const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const password = new Map();

for (let i = 0; i < N; i++) {
  const temp = input[i].split(" ");
  password.set(temp[0], temp[1]);
}

const result = [];
for (let i = N; i < N + M; i++) {
  result.push(password.get(input[i]));
}

console.log(result.join("\n"));