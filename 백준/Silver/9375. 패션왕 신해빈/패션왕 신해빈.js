const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const testCase = Number(input.shift())

function solution(clothes){
  const count = {}
  
  clothes.forEach(([,type]) => {
    count[type] = count[type] + 1 || 1;
  })
  
  return Object.values(count).reduce((acc, cur) => acc * (cur + 1), 1) -1
}

const result = [];
let currentIndex = 0;


for (let i = 0; i < testCase; i++) {
  const n = Number(input[currentIndex]);
  const clothes = input.slice(currentIndex+1, currentIndex+n+1).map(el => el.split(' '))
  result.push(solution(clothes));
  currentIndex += n + 1;
}

console.log(result.join('\n'))
