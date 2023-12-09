const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = Number(input[0]);
const list = input.slice(1);

const result = list.map((item) => {
  if (item.length === 1) return item.repeat(2);
  return `${item[0]}${item[item.length - 1]}`;
});

console.log(result.join('\n'));
