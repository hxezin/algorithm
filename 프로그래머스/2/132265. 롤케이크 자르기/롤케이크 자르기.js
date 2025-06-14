function solution(topping) {
    // rightMap (오른쪽에 있는 토핑의 수)를 만든다
    // leftSet (왼쪽에 있는 고유 토핑)을 하나씩 늘려간다
    // 매 순간, leftSet.size === rightMap.size이면 정답 카운트
    
    const rightMap = new Map();
    const leftSet = new Set();
    
    for(let t of topping){
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }

    let count = 0;
    for(let i = 0; i < topping.length; i++){
        const t = topping[i]
        
        leftSet.add(t);
        
        rightMap.set(t, rightMap.get(t) - 1);
        if(rightMap.get(t) === 0){
            rightMap.delete(t);
        }
        
        if(leftSet.size === rightMap.size){
            count++;
        }
    }
    
    return count;
}