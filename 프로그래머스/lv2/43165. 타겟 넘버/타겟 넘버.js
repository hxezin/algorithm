function solution(numbers, target) {
    let count = 0;
    
    const dfs = (idx, sum) => {
        if(idx < numbers.length){
            dfs(idx+1, sum + numbers[idx])
            dfs(idx+1, sum - numbers[idx])   
        }else{
            if(sum === target){
                count++;
            }
        }
    }
    
    dfs(0, 0)
    return count
}