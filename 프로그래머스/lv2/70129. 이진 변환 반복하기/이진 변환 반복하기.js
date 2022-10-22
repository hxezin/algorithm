function solution(s) {
    let result = [0, 0];

    while(s !== "1"){
        const temp = s.split("").filter(el => el === "1").length;
        result[0]++;
        result[1] += s.length - temp;
        s = temp.toString(2)
    }
    
    return result;
}