const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(BigInt);

const [A, B, C] = input;

function solution(base, exponent, modulus) {
  if (exponent === 0n) {
    return 1n;
  } else if (exponent % 2n === 0n) {
    const temp = solution(base, exponent / 2n, modulus);
    return (temp * temp) % modulus;
  } else {
    const temp = solution(base, (exponent - 1n) / 2n, modulus);
    return (base * temp * temp) % modulus;
  }
}

const result = solution(A, B, C);
console.log(result.toString());
