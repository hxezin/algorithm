function solution(k, score) {
    const hall = []
    const answer = [];
    
    for(let i = 0; i < score.length; i++){
        hall.push(score[i])
        const least = hall.sort((a, b) => b - a).slice(0, k)
        answer.push(least.at(-1))
    }
    
    return answer;
}