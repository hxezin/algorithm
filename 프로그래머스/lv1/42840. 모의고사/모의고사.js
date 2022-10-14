function solution(answers) {
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const score = [0, 0, 0]
    
    for(let i = 0; i < answers.length; i++){
        if(person1[i % 5] === answers[i]){
            score[0]++;
        }
        if(person2[i % 8] === answers[i]){
            score[1]++;
        }
        if(person3[i % 10] === answers[i]){
            score[2]++;
        }
    }
    
    const max = Math.max(...score)
    const result = [];
    score.forEach((el, idx) => {
        if(el === max) {
            result.push(idx + 1)
        }
    })
    
    return result;
}