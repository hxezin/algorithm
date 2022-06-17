function solution(n)
{
    var answer = 0;
    n = String(n);
    for(let x of n){
        answer += parseInt(x);
    }
        
    return answer;
}