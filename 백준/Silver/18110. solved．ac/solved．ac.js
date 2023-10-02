const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const n = input[0];
const opinions = input.slice(1);

function solution(n, opinions) {
  if (n === 0) return 0;

  opinions.sort((a, b) => a - b);
  const exclude = Math.round(n * 0.15);
  const validOpinions = opinions.slice(exclude, n - exclude);
  return Math.round(
    validOpinions.reduce((acc, cur) => acc + cur) / validOpinions.length
  );
}

const answer = solution(n, opinions);
console.log(answer);
