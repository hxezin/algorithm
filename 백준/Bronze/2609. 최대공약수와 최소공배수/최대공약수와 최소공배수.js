const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let m = Math.max(...input);
let n = Math.min(...input);

const helper = (m, n) => {
  while (n > 0) {
    if (m / n === 0) break;

    if (m / n !== 0) {
      temp = m % n;
      m = n;
      n = temp;
    }
  }
  return m;
};

let result = [];
result.push(helper(m, n));
result.push((m * n) / helper(m, n));

console.log(result.join("\n"));
