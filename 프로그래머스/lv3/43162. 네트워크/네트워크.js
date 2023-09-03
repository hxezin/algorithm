function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);

    function dfs(computer) {
        visited[computer] = true;

    for (let i = 0; i < n; i++) {
      if (computers[computer][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }

    return answer;
}