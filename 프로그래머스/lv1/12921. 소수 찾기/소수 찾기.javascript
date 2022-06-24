function solution(n) {
    let result = Array(n+1).fill(true)
    result[0] = false;
    result[1] = false;
    
    for(let i = 2; i <= n; i++){
        if(!result[i]){
            continue;
        }
        
        for(let j = i * 2; j <= n; j += i){
            result[j] = false;
        }
    }
    
    return result.filter(el => el === true).length;
}