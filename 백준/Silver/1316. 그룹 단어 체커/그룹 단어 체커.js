const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);

let count = 0;

for (let i = 1; i <= N; i++) {
  const word = input[i];
  let isGroupWord = true;
  const visited = new Array(26).fill(false);

  for (let j = 0; j < word.length; j++) {
    const currentChar = word[j].charCodeAt(0) - 'a'.charCodeAt(0);

    if (visited[currentChar]) {
      isGroupWord = false;
      break;
    }

    if (j < word.length - 1 && word[j] !== word[j + 1]) {
      visited[currentChar] = true;
    }
  }

  if (isGroupWord) count++;
}

console.log(count);
