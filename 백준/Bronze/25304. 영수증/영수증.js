const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const X = Number(input[0]);
const N = Number(input[1]);
const list = input.slice(2).map((item) => item.split(' ').map(Number));

const sum = list.reduce((acc, [price, count]) => (acc += price * count), 0);

console.log(sum === X ? 'Yes' : 'No');
