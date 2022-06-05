let fs = require("fs");

// 백준 제출할 때 주석 제거
const readFileSyncAddress = '/dev/stdin';

// VSC 테스트할 때 주석 제거
// const readFileSyncAddress = "example.txt";

let input = fs.readFileSync(readFileSyncAddress).toString().split("\n");
let n = parseInt(input[0]);

function fibonacci(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(n));