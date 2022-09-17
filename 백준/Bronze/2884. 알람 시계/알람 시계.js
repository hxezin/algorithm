const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [H, M] = input;
let hour = H;
let min = M;

if (min < 45) {
  min += 15;
  hour = hour === 0 ? 23 : hour - 1;
} else {
  min -= 45;
}

console.log(hour, min);
