const getTheNumberOfOne = (number) => {
    return number.toString(2).split("").filter(num => num === "1").length;
}

function solution(n) {
    const n1 = getTheNumberOfOne(n)
    let next = n + 1;
    
    while(true){
        const next1 = getTheNumberOfOne(next)
        if(n1 === next1){
            break;
        }
        next++;
    }
    
    return next;
}