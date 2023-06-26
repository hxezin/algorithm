function solution(a, b, n) {
    var answer = 0;
    
    while(a <= n){
        let change = n / a;
        answer += Math.floor(change) * b;
        n =  Math.floor(change) * b + (n % a);
    }
    
    return answer;
}