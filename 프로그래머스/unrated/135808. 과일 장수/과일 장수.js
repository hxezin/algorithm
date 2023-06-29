function solution(k, m, score) {
    var answer = 0;
    const sorted = score.sort((a, b) => b - a);
    for(let i = 0; i < sorted.length; i++){
        if((i + 1) % m !== 0) continue;
        answer += sorted[i] * m;
    }
    return answer;
}