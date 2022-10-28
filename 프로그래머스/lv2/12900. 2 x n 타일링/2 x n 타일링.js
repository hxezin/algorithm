function solution(n) {
  const arr = [];
  arr.push(0, 1, 2)
  
  for(let i = 3; i <= n; i++){
      arr[i] = (arr[i - 1] + arr[i - 2]) % 1000000007;
  }
  
  return arr[n];
}