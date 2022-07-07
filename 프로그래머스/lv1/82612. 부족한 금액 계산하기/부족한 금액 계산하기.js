function solution(price, money, count) {
    let sum2 = 0;
    
    for(let i = 1; i <= count; i++){
        sum2 += price * i;        
    }
    
    return sum2 - money > 0 ? sum2 - money : 0
}