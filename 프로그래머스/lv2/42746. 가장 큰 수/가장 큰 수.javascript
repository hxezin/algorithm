function solution(numbers) {
    let str = numbers.map(String).sort((a, b) => (b+a) - (a+b)).join("");
     
    return str[0] === "0" ? "0" : str;
}