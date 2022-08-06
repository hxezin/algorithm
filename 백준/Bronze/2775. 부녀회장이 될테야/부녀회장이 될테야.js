const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
let temp = [];
let result = [];

for (let i = 0; i < T; i++) {
  let k = input.shift();
  let n = input.shift();

  for (let j = 0; j <= k; j++) {
    temp[j] = [];
    let sum = 0;

    for (let l = 1; l <= n; l++) {
      if (j === 0) {
        temp[j].push(l);
      } else {
        sum += temp[j - 1][l - 1];
        temp[j].push(sum);
      }
    }
  }

  result.push(temp[k][n - 1]);
}

console.log(result.join("\n"));
