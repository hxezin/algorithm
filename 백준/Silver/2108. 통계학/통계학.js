const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const [N, ...nums] = input;

let result = [];

//산술 평균
let a1 = Math.round(nums.reduce((acc, cur) => acc + cur) / nums.length);
result.push(a1);

//중앙값
nums.sort((a, b) => a - b);
let a2 = nums[(nums.length - 1) / 2];
result.push(a2);

//최빈값
let temp = {};
nums.forEach((num) => {
  temp[num] = (temp[num] || 0) + 1;
});

let maxFreq = Math.max(...Object.values(temp));
let maxFreqNum = [];
Object.keys(temp).forEach((num) => {
  if (temp[num] === maxFreq) {
    maxFreqNum.push(num);
  }
});

maxFreqNum.sort((a, b) => a - b);
let a3 = maxFreqNum.length > 1 ? maxFreqNum[1] : maxFreqNum[0];
result.push(a3);

//범위
let a4 = nums[nums.length - 1] - nums[0];
result.push(a4);

console.log(result.join("\n"));
