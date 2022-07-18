const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let multi = input.reduce((acc, cur) => acc * cur, 1).toString();

let result = Array(10).fill(0);
for (let i = 0; i < multi.length; i++) {
  result[multi[i]]++;
}

console.log(result.join("\n"));
