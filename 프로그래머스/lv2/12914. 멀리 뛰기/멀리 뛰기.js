function solution(n) {
    const longJump = [];
    longJump.push(0, 1, 2);
    
    for(let i = 3; i <= n; i++){
        longJump[i] = (longJump[i - 1] + longJump[i - 2]) % 1234567;
    }
  
  return longJump[n];
}