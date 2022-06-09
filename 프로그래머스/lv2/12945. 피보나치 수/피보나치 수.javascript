function solution(n) {
    
    let a = 0;
    let b = 1;
    let c = a+b;
    
    for (let i=2; i<n; i++) {
        a = b
        b = c 
        c = (a + b) % 1234567;
    }
    
    return c;
}