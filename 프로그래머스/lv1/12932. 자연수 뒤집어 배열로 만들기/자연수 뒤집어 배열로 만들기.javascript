function solution(n) {
    var answer = [];
    n = String(n)
    
    for(let i = 0; i < n.length; i++){
        let convertNum = parseInt(n[i]);
        answer.unshift(convertNum);
    }
    
    return answer;
}