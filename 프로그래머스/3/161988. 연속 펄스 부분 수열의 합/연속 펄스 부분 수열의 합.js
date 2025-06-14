function solution(sequence) {
    
    // 최댓값
    let max1 = -Infinity;
    let max2 = -Infinity;
    
    // 누적합
    let sum1 = 0;
    let sum2 = 0;
    
    for(let i = 0; i < sequence.length; i++){
        let puls1 = i % 2 === 0 ? 1 : -1;
        let puls2 = -puls1;
        
        // 현재 요소와 현재 요소까지의 합 중에 비교
        sum1 = Math.max(sequence[i] * puls1, sum1 + sequence[i] * puls1);    
        sum2 = Math.max(sequence[i] * puls2, sum2 + sequence[i] * puls2);
        
        // 현재 까지의 합과 최댓값 중에 비교
        max1 = Math.max(max1, sum1);
        max2 = Math.max(max2, sum2);
    }
    
    return Math.max(max1, max2)
}