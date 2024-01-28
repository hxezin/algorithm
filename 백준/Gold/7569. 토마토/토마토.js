const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [M, N, H] = input[0].split(' ').map(Number)

const boxes = []
let box = []
for (let i = 1; i < input.length; i++) {
  box.push(input[i].split(' ').map(Number))

  if (i % N === 0) {
    boxes.push(box)
    box = []
  }
}

const directions = [
  { x: -1, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: -1, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: 0, z: -1 },
  { x: 0, y: 0, z: 1 },
]

let days = 0
let unripe = 0
const queue = []

// 초기 안익은 토마토 수를 구하고 익은 토마토들을 큐에 추가
for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (boxes[z][y][x] === 0) unripe++
      if (boxes[z][y][x] === 1) queue.push({ x, y, z, ripe: 0 })
    }
  }
}

let idx = 0
while (queue.length > idx) {
  const { x, y, z, ripe } = queue[idx]

  for (const dir of directions) {
    const nx = x + dir.x
    const ny = y + dir.y
    const nz = z + dir.z

    if (
      nx >= 0 &&
      nx < M &&
      ny >= 0 &&
      ny < N &&
      nz >= 0 &&
      nz < H &&
      boxes[nz][ny][nx] === 0
    ) {
      boxes[nz][ny][nx] = 1
      unripe--
      queue.push({ x: nx, y: ny, z: nz, ripe: ripe + 1 })
      days = ripe + 1
    }
  }

  idx++
}

console.log(unripe ? -1 : days)
