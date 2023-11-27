const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const [x, y] = input;
  let result;

  if (x > 0 && y > 0) result = 1;
  if (x < 0 && y > 0) result = 2;
  if (x < 0 && y < 0) result = 3;
  if (x > 0 && y < 0) result = 4;

  console.log(result);

  process.exit();
});
