function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let aPointer = 0;
    let bPointer = 0;
    let score = 0;
    
    while(aPointer < A.length && bPointer < B.length){
        if(B[bPointer] > A[aPointer]){
            score++;
            aPointer++;
        }
        bPointer++;
    }
    
    return score;
}