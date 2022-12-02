function solution(arr1, arr2) {
    const answer = [];
    
    for(let i = 0; i < arr1.length; i++){
        const newArr = [];
        
        for(let j = 0; j < arr2[0].length; j++){
            const temp = arr1[i].map((el, index) => el * arr2[index][j]).reduce((acc, cur) => acc + cur, 0)
            newArr.push(temp)
        }
        
        answer.push(newArr)
    }
    
    return answer;
}