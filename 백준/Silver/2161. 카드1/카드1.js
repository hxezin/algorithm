const input = require("fs").readFileSync("/dev/stdin").toString();

let queue = [];

for (let i = 1; i <= input; i++) {
  queue.push(i);
}

let result = [];

while (queue.length) {
  result.push(queue.shift());

  if (!queue.length) {
    break;
  }

  queue.push(queue.shift());
}

console.log(result.join(" "));
