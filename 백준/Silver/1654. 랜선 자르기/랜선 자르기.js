const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input.shift().split(" ").map(Number);
const cables = input.map(Number);

let min = 0;
let max = Math.max(...cables);
let mid;

while (min <= max) {
  mid = Math.floor((min + max) / 2);

  let count = cables.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (count >= N) {
    min = mid + 1;
  } else if (count < N) {
    max = mid - 1;
  }
}

console.log(max);
