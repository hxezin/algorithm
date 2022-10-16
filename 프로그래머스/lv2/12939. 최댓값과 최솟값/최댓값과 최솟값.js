function solution(s) {
    const min = Math.min(...s.split(" ").map(Number))
    const max = Math.max(...s.split(" ").map(Number))
    return `${min} ${max}`
}