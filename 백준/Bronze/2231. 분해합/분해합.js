const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const N = Number(input);

function solution() {
  for (let i = 1; i <= N; i++) {
    let sum = i;
    let number = i;

    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }

    if (sum === N) {
      return i;
    }
  }

  return 0;
}

const answer = solution();
console.log(answer);
