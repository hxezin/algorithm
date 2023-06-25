function solution(t, p) {
    var answer = 0;
    
    let left = 0;
    let right = p.length;
    
    while(right <= t.length){
        const substr = t.slice(left, right);
        if(substr <= p){
            answer++;
        }
        
        left++;
        right++;
    }
    
    return answer;
}