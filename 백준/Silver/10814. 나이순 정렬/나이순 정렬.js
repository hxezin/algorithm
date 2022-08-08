const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const result = input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(result.join("\n"));
