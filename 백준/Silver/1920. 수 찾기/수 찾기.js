const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const M = input[2];
const list = input[3].split(" ").map(Number);

const BinarySearch = (target) => {
  let start = 0;
  let end = A.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (A[mid] === target) {
      return 1;
    }

    if (A[mid] > target) {
      end = mid - 1;
    } else if (A[mid] < target) {
      start = mid + 1;
    }
  }
  return 0;
};

let result = list.map((target) => BinarySearch(target));

console.log(result.join("\n"));
