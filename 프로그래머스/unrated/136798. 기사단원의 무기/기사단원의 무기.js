function getDivisorCount(number) {
    let count = 0;
    
    for(let i = 1; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            count++;
            
            if(number / i != i){
                count++;
            }
        }
    }
    
    return count
}

function solution(number, limit, power) {
    var answer = 0;
    const divisorCount = [];
    
    for(let i = 1; i <= number; i++){
        divisorCount.push(getDivisorCount(i))
    }
    
    divisorCount.forEach((count) => {
        answer += count > limit ? power : count;
    })
    
    return answer;
}