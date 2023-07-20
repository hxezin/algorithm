function solution(numbers) {
    var answer = 0;
    const sum = numbers.reduce((cur, acc) => cur + acc);
    answer = sum / numbers.length;
    return answer;
}