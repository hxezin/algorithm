const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const result = input
  .split('-')
  .map((item) => {
    const numbers = item.split('+');
    return numbers.reduce((acc, num) => acc + Number(num), 0);
  })
  .reduce((acc, num) => acc - num);

console.log(result);
