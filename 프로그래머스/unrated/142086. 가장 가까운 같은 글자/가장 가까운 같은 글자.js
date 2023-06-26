function solution(s) {
    var answer = [];
    const letterIdx = {};
    
    s.split('').forEach((letter, idx) => {
        if(letterIdx[letter] !== undefined){
            const diff = idx - letterIdx[letter];
            answer.push(diff);
        }else{
            answer.push(-1);
        }
        letterIdx[letter] = idx;
    })
    
    return answer;
}