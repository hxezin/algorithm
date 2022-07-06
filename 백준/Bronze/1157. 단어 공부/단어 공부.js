let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let str = input.toUpperCase();
let count = Array(26).fill(0);

for (let letter of str) {
  count[letter.charCodeAt() - 65]++;
}

let max = Math.max(...count);
let maxIdx = count.indexOf(max);
let maxLastIdx = count.lastIndexOf(max);

let result = maxIdx === maxLastIdx ? String.fromCharCode(maxIdx + 65) : "?";

console.log(result);
