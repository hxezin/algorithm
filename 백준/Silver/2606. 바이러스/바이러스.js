const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const computer = Number(input.shift());
const totalPair = input.shift();
const pair = input.map((el) => el.split(" "));

const graph = Array.from({ length: computer + 1 }, () => []);

pair.forEach((el) => {
  graph[el[0]].push(el[1]);
  graph[el[1]].push(el[0]);
});

const virus = Array(computer + 1).fill(0);
const queue = [];
queue.push(1);

while (queue.length) {
  let curCom = queue.shift();

  if (virus[curCom] === 1) continue;

  virus[curCom] = 1;
  graph[curCom].forEach((nextCom) => {
    if (virus[nextCom] === 0) {
      queue.push(nextCom);
    }
  });
}

const result = virus.filter((el) => el === 1).length - 1;
console.log(result);
