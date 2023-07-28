function solution(elements) {
    const n = elements.length;
    const sumMemo = new Array(2*n + 1).fill(0);
    const sumSet = new Set();

    for (let i = 1; i <= 2*n; i++) {
        sumMemo[i] = sumMemo[i-1] + elements[(i-1)%n];
    }

    for (let i = 1; i <= n; i++) {
        for (let j = i; j < i + n; j++) {
            sumSet.add(sumMemo[j] - sumMemo[i-1]);
        }
    }

    return sumSet.size;
}
