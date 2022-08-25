const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();

const result = [];
for (let i = 0; i < T; i++) {
  const p = input.shift();
  const n = input.shift();
  const arr = input.shift();
  const deque = arr
    .slice(1, -1)
    .split(",")
    .filter((el) => el !== "");

  let reverseCount = 0;
  let isError = false;

  for (let j = 0; j < p.length; j++) {
    if (p[j] === "R") {
      reverseCount++;
      continue;
    }
    if (p[j] === "D") {
      if (deque.length === 0) {
        result.push("error");
        isError = true;
        break;
      }
      reverseCount % 2 ? deque.pop() : deque.shift();
    }
  }
  if (!isError) {
    result.push(`[${reverseCount % 2 ? deque.reverse() : deque}]`);
  }
}

console.log(result.join("\n"));
