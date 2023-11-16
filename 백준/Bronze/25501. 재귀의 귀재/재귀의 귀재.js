const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const strs = input.slice(1);

const result = [];

function recursion(str, left, right, count) {
  if (left >= right) return [1, count];
  else if (str[left] !== str[right]) return [0, count];
  else return recursion(str, left + 1, right - 1, count + 1);
}

function isPalindrome(str) {
  return recursion(str, 0, str.length - 1, 1).join(' ');
}

for (let i = 0; i < T; i++) {
  result.push(isPalindrome(strs[i]));
}

console.log(result.join('\n'));
