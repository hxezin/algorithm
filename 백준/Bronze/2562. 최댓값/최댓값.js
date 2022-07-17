const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let max = Math.max(...input);
let maxIdx = input.indexOf(max);

console.log(`${max}\n${maxIdx + 1}`);
