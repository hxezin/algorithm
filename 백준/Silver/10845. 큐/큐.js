const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const queue = [];
const print = [];

input.forEach((el) => {
  const command = el.split(" ");
  switch (command[0]) {
    case "push":
      queue.push(command[1]);
      break;
    case "pop":
      print.push(queue.length ? queue.shift() : -1);
      break;
    case "size":
      print.push(queue.length);
      break;
    case "empty":
      print.push(queue.length ? 0 : 1);
      break;
    case "front":
      print.push(queue.length ? queue[0] : -1);
      break;
    case "back":
      print.push(queue.length ? queue[queue.length - 1] : -1);
      break;
  }
});

console.log(print.join("\n"));
