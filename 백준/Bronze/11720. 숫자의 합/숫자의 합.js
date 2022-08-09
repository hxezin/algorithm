const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const nums = input[0].split("").map(Number);

const result = nums.reduce((acc, cur) => acc + cur, 0);
console.log(result);
