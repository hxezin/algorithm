function solution(n, words) {
    const result = [];
    let rounds = 1;
    let count = 1;
    let firstLetter = "";
    let visited = [];
    
    for(let i = 0; i < words.length; i++){
        if(count > n){
            count = 1;
            rounds++;
        }
        
        if(i !== 0 && words[i][0] !== firstLetter || visited.includes(words[i])){
            result.push(count, rounds)
            break;
        }
        
        firstLetter = words[i][words[i].length - 1];
        visited.push(words[i])
        count++;
    }
    
    if(result.length === 0) {
        return [0, 0]
    }
    
    return result;
}