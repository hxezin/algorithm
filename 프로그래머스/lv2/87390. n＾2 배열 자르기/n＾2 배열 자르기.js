function solution(n, left, right) {
    var answer = [];
    
    for(let i = left; i <= right; i++){
        let row = Math.floor(i/n) + 1;
        let column = (i % n) + 1;
        answer.push(Math.max(row, column));
    }
    
    return answer;
}