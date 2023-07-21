function solution(n, k) {
    var answer = 0;
    answer = n * 12000 + (k - parseInt(n/10)) * 2000;
    return answer;
}