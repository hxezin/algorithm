let input = require("fs").readFileSync("/dev/stdin").toString();

function solution(input) {
  let num = BigInt(input);
  let start = BigInt(1);
  let end = BigInt(num);

  while (start <= end) {
    let mid = (start + end) / 2n;

    if (mid ** 2n > num) {
      end = mid - 1n;
    } else if (mid ** 2n < num) {
      start = mid + 1n;
    } else {
      return mid;
    }
  }
}
console.log(solution(input) + "");