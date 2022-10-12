function solution(X, Y) {
    const num = Array.from({length: 10}, () => [0, 0]);

    X.split("").forEach(el => {
        num[el][0] = num[el][0] + 1 || 1;
    })
    
    Y.split("").forEach(el => {
          num[el][1] = num[el][1] + 1 || 1;
    })
    
    let temp = ""
    num.forEach((el, index) => {
        if(el[0] === 0 || el[1] === 0) return;
        const repeatNum = Math.min(...el);
        temp += String(index).repeat(repeatNum)
    })
    
    const result = temp.split("").sort((a, b) => b - a).join("");
    if(result[0] === "0") return "0";
    return result.length === 0 ? "-1" : result;
}