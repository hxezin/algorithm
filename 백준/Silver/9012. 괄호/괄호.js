const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  let ps = input[i].split("");
  let stack = [ps[0]];

  for (let j = 1; j < ps.length; j++) {
    if (stack[stack.length - 1] === "(" && ps[j] === ")") {
      stack.pop();
    } else {
      stack.push(ps[j]);
    }
  }
  console.log(stack.length === 0 ? "YES" : "NO");
}
