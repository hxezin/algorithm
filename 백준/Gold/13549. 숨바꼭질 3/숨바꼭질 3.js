const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, K] = input;

function solution(start, end) {
  const MAX_POSITION = 100000;
  const visited = new Array(MAX_POSITION + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length > 0) {
    const [currentPosition, time] = queue.shift();

    if (currentPosition === end) {
      return time;
    }

    if (currentPosition * 2 <= MAX_POSITION && !visited[currentPosition * 2]) {
      queue.push([currentPosition * 2, time]);
      visited[currentPosition * 2] = true;
    }

    if (currentPosition - 1 >= 0 && !visited[currentPosition - 1]) {
      queue.push([currentPosition - 1, time + 1]);
      visited[currentPosition - 1] = true;
    }

    if (currentPosition + 1 <= MAX_POSITION && !visited[currentPosition + 1]) {
      queue.push([currentPosition + 1, time + 1]);
      visited[currentPosition + 1] = true;
    }
  }

  return -1;
}

const answer = solution(N, K);
console.log(answer);
