function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(false);
    
    function dfs(node){
        visited[node] = true;
        for(let i = 0; i < n; i++){
            if(computers[node][i] === 1 && !visited[i]){
                dfs(i)
            }
        }
    }
    
    for(let j = 0; j < n; j++){
        if(!visited[j]){
            dfs(j)
            answer++;
        }
    }
        
    return answer;
}