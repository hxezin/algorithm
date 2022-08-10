const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, nCard, M, mCard] = input;
nCard = nCard.split(" ").map(Number);
mCard = mCard.split(" ").map(Number);

let count = new Map();
const result = [];

nCard.forEach((card) => {
  if (!count.has(card)) {
    count.set(card, 1);
  } else {
    count.set(card, count.get(card) + 1);
  }
});

mCard.forEach((card) => {
  result.push(count.has(card) ? count.get(card) : 0);
});

console.log(result.join(" "));
