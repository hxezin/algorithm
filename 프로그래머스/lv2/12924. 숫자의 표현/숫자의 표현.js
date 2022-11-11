function solution(n) {
    let count = 0;
    
    for(let i = 1; i <= n/2; i++){
        let temp = 0;
        for(let j = i; j <= n; j++){
            temp += j;
            if(temp > n){
                break;
            }
            if(temp === n){
                count++;
            }
        }
    }
    
    return count + 1;
}