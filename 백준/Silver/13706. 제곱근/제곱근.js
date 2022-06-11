let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
  let result = BigInt(input);
  let start = BigInt(1);
  let end = BigInt(input);

  while (start <= end) {
    let mid = (start + end) / 2n;

    if (mid ** 2n > result) {
      end = mid - 1n;
    } else if (mid ** 2n < result) {
      start = mid + 1n;
    } else {
      return mid;
    }
  }
}
console.log(solution(input[0]) + "");
