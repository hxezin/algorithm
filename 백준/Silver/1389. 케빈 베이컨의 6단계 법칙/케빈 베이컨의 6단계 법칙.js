const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

input.forEach((el) => {
  const temp = el.split(" ");
  graph[temp[0]].push(temp[1]);
  graph[temp[1]].push(temp[0]);
});

const result = Array(N + 1).fill(0);

const helper = (start) => {
  const visited = Array(N + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length) {
    let [cur, count] = queue.shift();
    if (visited[cur] === true) continue;
    visited[cur] = true;
    result[start] += count++;
    graph[cur].forEach((next) => {
      queue.push([next, count]);
    });
  }
};

for (let i = 1; i <= N; i++) {
  helper(i);
}

result.shift();
console.log(result.indexOf(Math.min(...result)) + 1);
