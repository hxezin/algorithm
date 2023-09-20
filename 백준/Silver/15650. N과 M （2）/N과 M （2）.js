const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const [N, M] = input.map(Number);

function generateCombinations(M, combi, start, result) {
  if (M === 0) {
    result.push(combi.join(' '));
    return;
  }

  for (let i = start; i <= N; i++) {
    combi.push(i);
    generateCombinations(M - 1, combi, i + 1, result);
    // 백트래킹
    combi.pop();
  }
}

function solution() {
  const combi = [];
  const result = [];
  generateCombinations(M, combi, 1, result);

  return result.join('\n');
}

const answer = solution();
console.log(answer);
