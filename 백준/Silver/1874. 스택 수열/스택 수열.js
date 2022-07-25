const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const nums = input.map(Number);

const solution = (n, nums) => {
  let stack = [];
  let result = [];
  let count = 1;

  for (let i = 0; i < n; i++) {
    while (count <= nums[i]) {
      stack.push(count);
      result.push("+");
      count++;
    }

    if (stack[stack.length - 1] === nums[i]) {
      stack.pop();
      result.push("-");
    } else {
      return "NO";
    }
  }

  return result.join("\n");
};

console.log(solution(n, nums));
