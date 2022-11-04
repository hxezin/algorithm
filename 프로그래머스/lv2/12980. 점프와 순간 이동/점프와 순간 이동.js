function solution(n){
    let result = 0;
    
    while(n > 0){
        if(n % 2 === 0){
            n /= 2;
        }else{
            n--;
            result++;
        }
    }
    
    return result;
}