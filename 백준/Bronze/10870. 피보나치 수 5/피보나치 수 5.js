let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let n = parseInt(input[0]);

function fibonacci(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(n));