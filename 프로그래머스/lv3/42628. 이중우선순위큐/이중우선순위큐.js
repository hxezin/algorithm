function solution(operations) {
    const Q = [];
    
    for (let i = 0; i < operations.length; i++) {
        const [operation, num] = operations[i].split(" ")
        
        switch (operation) {
            case "I":
                Q.push(num);
                break;
            case "D":
                if (Q.length === 0) break;
                if (num === "1") {
                    Q.sort((a, b) => b - a);
                }
                if (num === "-1") {
                Q.sort((a, b) => a - b);
                }
                Q.shift();
                break;
        }
    }
    
  return Q.length === 0 ? [0, 0] : [Math.max(...Q), Math.min(...Q)];
}