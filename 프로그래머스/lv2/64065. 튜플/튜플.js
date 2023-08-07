function solution(s) {
    const numbers = s
        .match(/\d+/g)
        .map(Number);

    const count = {};
    for (const num of numbers) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    const sortedNumbers = Object.keys(count).sort((a, b) => count[b] - count[a]);
    const result = sortedNumbers.map(Number)
    
    return result;
}
