function solution(m, n, puddles) {
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    dp[1][1] = 1;

    for (const puddle of puddles) {
        const [puddleX, puddleY] = puddle;
        dp[puddleX][puddleY] = -1;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (dp[i][j] !== -1) {
                if (i > 1 && dp[i - 1][j] !== -1) dp[i][j] = (dp[i][j] + dp[i - 1][j]) % 1000000007;
                if (j > 1 && dp[i][j - 1] !== -1) dp[i][j] = (dp[i][j] + dp[i][j - 1]) % 1000000007;
            }
        }
    }

    return dp[m][n] % 1000000007;
}