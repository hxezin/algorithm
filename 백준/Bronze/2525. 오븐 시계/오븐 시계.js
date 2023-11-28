const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const C = Number(input[1]);

const currentTimeInMinutes = A * 60 + B;
const endTimeInMinutes = currentTimeInMinutes + C;

const endHour = Math.floor(endTimeInMinutes / 60) % 24;
const endMinute = endTimeInMinutes % 60;

console.log(`${endHour} ${endMinute}`);
