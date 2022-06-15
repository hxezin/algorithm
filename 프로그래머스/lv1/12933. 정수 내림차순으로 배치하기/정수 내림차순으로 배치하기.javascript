function solution(n) {
    return parseInt(((((String(n)).split("")).sort()).reverse()).join(""));
}