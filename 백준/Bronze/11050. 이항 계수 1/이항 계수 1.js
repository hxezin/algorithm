const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, K] = input;

const factorial = (num) => {
  let temp = 1;

  for (let i = 1; i <= num; i++) {
    temp *= i;
  }

  return temp;
};

console.log(factorial(N) / (factorial(N - K) * factorial(K)));
