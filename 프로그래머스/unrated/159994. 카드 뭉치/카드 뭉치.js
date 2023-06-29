function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let cards1Idx = 0;
    let cards2Idx = 0;
    
    for(let i = 0; i < goal.length; i++){
        const word = goal[i];
        if(cards1[cards1Idx] === word){
            cards1Idx++;
        }else if(cards2[cards2Idx] === word){
            cards2Idx++;
        }else{
            answer = 'No';
        }
    }
    
    return answer;
}