function solution(topping) {
    const total = {};
    const divide = [];
    const count = [0, 0];
    let result = 0;
    
    // 전체 토핑 개수
    topping.forEach(item => {
        total[item] = total[item]+1 || 1;
    })
    
    // 자른 부분과 남겨진 부분 토핑 종류 비교
    count[0] = Object.keys(total).length;
    topping.forEach(item => {
        total[item]--;
        if(divide.indexOf(item) === -1){
            count[1]++;
            divide.push(item)
        }
        if(total[item] === 0){
            count[0]--;
        }
        if(count[0] === count[1]){
            result++;
        }
    })
    
    return result;
}