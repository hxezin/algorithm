const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);
const sections = input.slice(2);

const memo = new Array(N + 1).fill(-1);
nums.unshift(0);
memo[0] = 0;

function getSum(idx) {
  if (memo[idx] !== -1) {
    return memo[idx];
  }

  memo[idx] = getSum(idx - 1) + nums[idx];
  return memo[idx];
}

const answer = sections
  .map((section) => {
    const [i, j] = section.split(' ');
    return getSum(j) - getSum(i - 1);
  })
  .join('\n');

console.log(answer);
