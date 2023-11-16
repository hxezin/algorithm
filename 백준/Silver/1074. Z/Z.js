const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, r, c] = input;
const size = 2 ** N;

function solution(startR, startC, endR, endC) {
  const quadrantCount = ((endR - startR + 1) * (endC - startC + 1)) / 4;
  const midR = parseInt((startR + endR) / 2);
  const midC = parseInt((startC + endC) / 2);

  if (r < startR || r > endR || c < startC || c > endC) return Infinity;

  if (startR == endR && startC == endC) return 1;

  return Math.min(
    solution(startR, startC, midR, midC),
    quadrantCount + solution(startR, midC + 1, midR, endC),
    quadrantCount * 2 + solution(midR + 1, startC, endR, midC),
    quadrantCount * 3 + solution(midR + 1, midC + 1, endR, endC)
  );
}

console.log(solution(0, 0, size - 1, size - 1) - 1);
