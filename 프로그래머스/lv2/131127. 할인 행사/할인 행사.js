function solution(want, number, discount) {
    var answer = 0;
    const totalDays = number.reduce((acc, cur) => acc + cur, 0);

    for(let i = 0; i <= discount.length - totalDays; i++){
        let totalCount = totalDays;
        const itemCount = number.slice()
        
        for(let j = i; j <= i + totalDays; j++){
            if(totalCount === 0){
                answer++;
                break;
            }
        
            const itemIdx = want.indexOf(discount[j])
            if(itemIdx !== -1 && itemCount[itemIdx]){
                itemCount[itemIdx]--;
                totalCount--;
            }
        }
    }
    
    return answer;
}