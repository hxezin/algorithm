const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();

const deque = [];
const print = [];

input.forEach((command) => {
  command = command.split(" ");

  if (command[0].startsWith("push")) {
    command.unshift(...command.shift().split("_"));
  }

  if (command[0].startsWith("pop")) {
    command = command[0].split("_");
  }

  switch (command[0]) {
    case "push":
      if (command[1] === "front") {
        deque.unshift(command[2]);
      } else {
        deque.push(command[2]);
      }
      break;
    case "pop":
      if (command[1] === "front") {
        print.push(deque.length ? deque.shift() : -1);
      } else {
        print.push(deque.length ? deque.pop() : -1);
      }
      break;
    case "size":
      print.push(deque.length);
      break;
    case "empty":
      print.push(deque.length ? 0 : 1);
      break;
    case "front":
      print.push(deque.length ? deque[0] : -1);
      break;
    case "back":
      print.push(deque.length ? deque[deque.length - 1] : -1);
      break;
  }
});

console.log(print.join("\n"));