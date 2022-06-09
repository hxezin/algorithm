function solution(n, m) {
    let result = [];
    let max = Math.max(n, m)
    let min = Math.min(n, m)
    
    //최대공약수
    for(let i = 1; i <= max; i++ ){
        if(max % i === 0 && min % i === 0){
            result[0] = i;
        }
    }
    
    //최소공배수
    result[1] = result[0] * (max / result[0]) * (min / result[0])
    
    return result;
}