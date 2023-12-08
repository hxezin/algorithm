const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const attendant = input.map(Number);
const attendanceBook = Array.from({ length: 30 }, (_, idx) => idx + 1);

console.log(
  attendanceBook.filter((student) => !attendant.includes(student)).join('\n')
);
