function solution(arr, divisor) {
    let result = arr.sort((a, b) => a - b).filter(el => el % divisor === 0)
    return result.length !== 0 ? result : [-1]
}