const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
const pokemon = input.slice(0, N);
const problem = input.slice(N);

const pokemonName = new Map();
const pokemonNum = new Map();
pokemon.forEach((pokemon, idx) => {
  pokemonName.set(idx + 1, pokemon);
  pokemonNum.set(pokemon, idx + 1);
});

const result = [];

problem.forEach((el) => {
  const temp = Number(el);
  result.push(isNaN(temp) ? pokemonNum.get(el) : pokemonName.get(temp));
});

console.log(result.join("\n"));
