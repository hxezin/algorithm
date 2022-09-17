const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = input.shift();
const result = [];

const bfs = (A, B) => {
  const visited = Array(10001).fill(false);
  const queue = [[A, ""]];
  visited[A] = true;

  while (queue.length) {
    const [n, print] = queue.shift();

    if (n === B) {
      return print;
    }

    const D = (n * 2) % 10000;
    if (!visited[D]) {
      visited[D] = true;
      queue.push([D, print + "D"]);
    }

    const S = n === 0 ? 9999 : n - 1;
    if (!visited[S]) {
      visited[S] = true;
      queue.push([S, print + "S"]);
    }

    const L = (n % 1000) * 10 + Math.floor(n / 1000);
    if (!visited[L]) {
      visited[L];
      queue.push([L, print + "L"]);
    }

    const R = (n % 10) * 1000 + Math.floor(n / 10);
    if (!visited[R]) {
      visited[R];
      queue.push([R, print + "R"]);
    }
  }
};

input.forEach((test) => {
  const [A, B] = test.split(" ").map(Number);
  result.push(bfs(A, B));
});

console.log(result.join("\n"));
