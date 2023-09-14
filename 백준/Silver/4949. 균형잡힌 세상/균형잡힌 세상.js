const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const pattern = /[^\(\)\[\]]/g;
  const str = input[i].replace(pattern, '');

  const stack = [];
  for (let j = 0; j < str.length; j++) {
    if (stack.length === 0) {
      stack.push(str[j]);
      continue;
    }

    const temp = stack[stack.length - 1];
    if ((temp === '(' && str[j] === ')') || (temp === '[' && str[j] === ']')) {
      stack.pop();
    } else {
      stack.push(str[j]);
    }
  }

  answer.push(stack.length === 0 ? 'yes' : 'no');
}

console.log(answer.join('\n'));
