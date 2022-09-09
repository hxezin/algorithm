const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const S = input.shift().split(" ").map(Number);

const sumArr = Array(2000001).fill(false);

const dfs = (idx, sum) => {
  if (idx === Number(N)) {
    sumArr[sum] = true;
  } else {
    dfs(idx + 1, sum);
    dfs(idx + 1, sum + S[idx]);
  }
};

dfs(0, 0);

for (let i = 1; i < 2000001; i++) {
  if (!sumArr[i]) {
    console.log(i);
    break;
  }
}