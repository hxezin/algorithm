function solution(numbers) {
    let result = 45;

    numbers.forEach(num => {
        result -= num
    })
    
    return result
}