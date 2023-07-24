function solution(money) {
    var answer = [];
    answer[0] = parseInt(money / 5500);
    answer[1] = parseInt(money % 5500);
    return answer;
}