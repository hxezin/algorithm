function solution(n, s) {
    if (n > s) {
        return [-1];
    }

    const quotient = Math.floor(s / n);
    const remainder = s % n;

    var answer = [];
    for (let i = 0; i < n; i++) {
        if (i < n - remainder) {
            answer.push(quotient);
        } else {
            answer.push(quotient + 1);
        }
    }

  return answer;
}