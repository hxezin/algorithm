const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = input[1].split(" ");
console.log(Math.min(...nums), Math.max(...nums));
