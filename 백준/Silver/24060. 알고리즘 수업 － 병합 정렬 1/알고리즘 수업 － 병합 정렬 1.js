const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const merge = (arr1, arr2) => {
  let result = [];
  let [i, j] = [0, 0];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    count++;
    if (count === K) target = result[result.length - 1];
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    count++;
    if (count === K) target = result[result.length - 1];
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    count++;
    if (count === K) target = result[result.length - 1];
  }
  return result;
};

let count = 0;
let target;
const solution = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = solution(arr.slice(0, mid));
  let right = solution(arr.slice(mid));
  return merge(left, right);
};

solution(A);
if (!target) target = -1;
console.log(target);
